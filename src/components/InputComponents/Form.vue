<template>
    <div class="form">
        <h3>[カロリーを記録]</h3>
        <v-form>
            <v-select
                :items="items"
                label="食べた時間帯を選択"
                v-model="time"
            ></v-select>
            <v-text-field
                label="食べた物の名前を入力"
                v-model="name"
                :rules="[rules.counter]"
            ></v-text-field>
            <v-text-field
                label="カロリーを入力"
                hint="嘘はついたらだめだからね (^^)"
                v-model="cal"
                :rules="[rules.typeCheck]"
            ></v-text-field>
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
export default {
    data(){
        return{
            items:["朝ごはん","昼ごはん","おやつ","夜ごはん","夜食","その他"],
            loading:false,
            time:"",
            name:"",
            cal:"",
            pushData:{
                year:"",
                month:"",
                day:"",
                time:"",
                name:"",
                cal:""
            },
            rules: {
                typeCheck: value => !isNaN(Number(value))  || '半角数字のみで大丈夫です',
                counter: value => value.length <= 20 || '20文字までです',
            }
        }
    },
    methods:{
        pushDb(){
            this.loading = true;
            let d = new Date();
            let year = d.getFullYear();
            let month = d.getMonth()+1;
            let day = d.getDate();
            this.pushData.year = year;
            this.pushData.month = month;
            this.pushData.day = day;
            this.pushData.time = this.time;
            this.pushData.name = this.name;
            this.pushData.cal = this.cal;
            
            setTimeout(()=>{
                console.log(this.pushData)
                this.$emit("resultHiddenEvent","on");
                this.loading = false;
                this.time = "";
                this.name = "";
                this.cal = "";
            },3000);
            setTimeout(()=>{
                this.$emit("resultHiddenEvent","off");
            },5000);
            
            

        }
    },
    computed:{
        CheckText(){
            if(this.time.length > 0 && this.name.length > 0 && this.cal.length > 0){
                return false;
            }else{
                return true;
            }
        }
    }
}
</script>

<style scoped>
.form{
    background-color: white;
    border: 3px solid #ffcc80c0;
    margin: 50px 12%;
    height: 400px;
    padding: 10px 5%;
}
.form h3{
    margin: 10px 0 30px 0;
}
</style>
