<template>
    <div class="form">
        <h3>[カロリーを記録]</h3>
        <v-form>
            <v-select
                :items="times"
                label="食べた時間帯を選択"
                v-model="time"
            ></v-select>

            <div>
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
            <v-btn
                elevation="2"
                large
                color="#FFCC80"
                block
                class="my-5"
                :loading="loading"
                :disabled="CheckText"
                @click="pushDb"
            >記録</v-btn>
        </v-form>
    </div>

</template>

<script>
import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"
import { collection,setDoc, getDocs, doc } from "firebase/firestore";
initializeApp({
  apikey:process.env.VUE_APP_APIKEY,
  authDomain:process.env.VUE_APP_AUTHDOMAIN,
  projectId:process.env.VUE_APP_PROJECT_ID,
});

const db = getFirestore();

export default {
    data(){
        return{
            times:["朝ごはん","昼ごはん","おやつ","夜ごはん","夜食","その他"],
            genres:["基本メニュー","和食","洋食","中華","サラダ","デザート/飲み物"],
            basic:[{title:"ご飯小盛り",cal:"168"}],
            japanese:[{title:"かつ丼",cal:"893"},{title:"その他"}],
            western:[{title:"ミートソーススパゲッティ",cal:"597"},{title:"その他"}],
            chinese:[{title:"ラーメン",cal:"443"},{title:"その他"}],
            sarada:[{title:"普通のサラダ",cal:"21"},{title:"その他"}],
            dd:[{title:"コーヒー",cal:"7"},{title:"その他"}],
            names:[],
            otherCheck:true,
            loading:false,
            time:"",
            name:"",
            genre:"",
            cal:"",
            year:"",
            month:"",
            pushData:{
                day:"",
                time:"",
                genre:"",
                name:"",
                cal:""
            },
            rules: {
                typeCheck: value => !isNaN(Number(value))  || '半角数字のみで大丈夫です',
            },
        }
    },
    methods:{
        changeGenre(){
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
        async pushDb(){
            const d = new Date();
            this.year = String(d.getFullYear());
            this.month = String(d.getMonth()+1)+String(Date.now());
            const dataRef = doc(db, this.year, this.month) ;

            this.pushData.day = String(d.getDate());
            this.loading = true;
            this.pushData.time = this.time;
            this.pushData.genre = this.genre;
            this.pushData.name = this.name;
            this.pushData.cal = this.cal;
            try {
                await setDoc(dataRef, this.pushData);
                this.$emit("resultHiddenEvent","on");
                this.loading = false;
                this.time = "";
                this.genre = "";
                this.name = "";
                this.cal = "";
                setTimeout(()=>{
                    this.$emit("resultHiddenEvent","off");
                },3000);
                this.getData();
            } catch (e) {
                console.error("Error adding document: ", e);
            }
        },
        async getData(){
            const querySnapshot = await getDocs(collection(db, this.year));

            querySnapshot.forEach((doc) => {
            console.log(doc.id, " => ", doc.data());
            });
        }
    },
    computed:{
        CheckText(){
            if(this.time.length > 0 && this.name.length > 0 && this.cal.length > 0 && !isNaN(Number(this.cal))){
                return false;
            }else{
                return true;
            }
        },
    },
    
}
</script>

<style scoped>
.form{
    background-color: white;
    border: 3px solid #ffcc80c0;
    margin: 50px 12%;
    height: 450px;
    padding: 10px 5%;
}
.form h3{
    margin: 10px 0 30px 0;
}
</style>
