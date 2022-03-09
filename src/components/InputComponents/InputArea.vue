<template>
    <div class="inputForm">
        <div class="clearBtn" @click="clear"><h3>Clear</h3></div>
        <v-select
            :items="genres"
            label="ジャンル"
            v-model="genre"
            @change="changeGenre"
        ></v-select>
        <v-select
            :items="names"
            label="料理名"
            item-text="title"
            v-model="name"
            @change="showCal"
        ></v-select>
        <v-text-field
            label="カロリーを入力"
            hint="嘘はついたらだめだからね (^^)"
            v-model="cal"
            :disabled="otherCheck"
            :rules="[rules.typeCheck]"
        ></v-text-field>
    </div>
</template>

<script>
export default {
    props:{
        componentId:{
            type:Number
        },
        pushDbAfter:{
            type:Boolean
        }
    },
    data(){
        return{
            genres:["基本メニュー","和食","洋食","中華","サラダ","デザート/飲み物"],
            basic:[{title:"ご飯小盛り",cal:"168"}],
            japanese:[{title:"かつ丼",cal:"893"},{title:"その他"}],
            western:[{title:"ミートソーススパゲッティ",cal:"597"},{title:"その他"}],
            chinese:[{title:"ラーメン",cal:"443"},{title:"その他"}],
            sarada:[{title:"普通のサラダ",cal:"21"},{title:"その他"}],
            dd:[{title:"コーヒー",cal:"7"},{title:"その他"}],
            names:[],
            otherCheck:true,
            checkText:false,
            name:"",
            genre:"",
            cal:"",
            clean:false,
            rules: {
                typeCheck: value => !isNaN(Number(value))  || '半角数字のみで大丈夫です',
            },
        }
    },
    methods:{
        changeGenre(){
            this.cal = "";
            if(this.genre === "基本メニュー"){
                this.names = this.basic;
            }else if(this.genre === "和食"){
                this.names = this.japanese;
            }else if(this.genre === "洋食"){
                this.names = this.western;
            }else if(this.genre === "中華"){
                this.names = this.chinese;
            }else if(this.genre === "サラダ"){
                this.names = this.sarada;
            }else if(this.genre === "デザート/飲み物"){
                this.names = this.dd;
            }
        },
        showCal(){
            this.otherCheck = true;
            this.names.forEach((item,index)=>{
                if(item.title === this.name){
                    this.cal = this.names[index].cal;
                    if(this.name === "その他"){
                        this.cal = "";
                        this.otherCheck = false;
                    }
                }
            });
        },
        clear(){
            const dataCheck = (currentdata) => currentdata.genre === "NODATA";
            setTimeout(() => {
                this.$store.state.meals[this.componentId] = {genre:"NODATA"};
                if(this.$store.state.meals.every(dataCheck)){
                     this.$emit("btnOn",true);
                }else{
                    this.$emit("btnOn",false);
                }
            }, 1000);
            
            this.genre = "";
            this.name = "";
            this.cal = "";
        }
    },
    watch:{
        genre:function(){
            this.$emit("btnOn",true);
        },
        cal:function(){        
            if(((this.cal.length > 0) && !isNaN(Number(this.cal)))){
                this.$store.state.meals[this.componentId] = {genre:this.genre,name:this.name,cal:this.cal};
                this.$emit("btnOn",false);
            }else{return this.$emit("btnOn",true);}
        },

        pushDbAfter:function(){
            if(this.pushDbAfter === true){
                this.name = "";
                this.genre = "";
                this.cal = "";
                this.$emit("allClearOK",false);
            }
        }
    }
}
</script>

<style scoped>
.inputForm{
    border: 2px solid rgb(134, 130, 130);
    border-radius: 20px;
    padding: 10px 5px;
    margin: 5px 0;
}
.clearBtn{
    width: 100px;
    height: 30px;
    text-align: center;
    border: 2px solid rgba(143, 135, 135, 0.8);
    border-radius: 30px;
    padding: 0 0;
    box-shadow: 2px -1px rgba(143, 135, 135, 0.8);
}
.clearBtn:active{
    box-shadow: none;
    border: none;
}

</style>