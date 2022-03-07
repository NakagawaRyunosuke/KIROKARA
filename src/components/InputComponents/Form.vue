<template>
    <div class="form">
        <h3>[カロリーを記録]</h3>
        <v-form>
            <v-select
                :items="times"
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
            loading:false,
            time:"",
            name:"",
            cal:"",
            year:"",
            month:"",
            pushData:{
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
        async pushDb(){
            const d = new Date();
            this.year = String(d.getFullYear());
            this.month = String(d.getMonth()+1)+String(Date.now());
            const dataRef = doc(db, this.year, this.month) ;

            this.pushData.day = String(d.getDate());
            this.loading = true;
            this.pushData.time = this.time;
            this.pushData.name = this.name;
            this.pushData.cal = this.cal;
            try {
                await setDoc(dataRef, this.pushData);
                this.$emit("resultHiddenEvent","on");
                this.loading = false;
                this.time = "";
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
            if(this.time.length > 0 && this.name.length > 0 && this.cal.length > 0 && !isNaN(Number(this.cal)) && this.name.length <= 20){
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
