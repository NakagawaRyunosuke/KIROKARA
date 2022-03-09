<template>
    <div class="form">
        <h3>カロリーを記録</h3>
        <v-form>
            <v-select
                :items="times"
                label="食べた時間帯を選択"
                v-model="time"
            ></v-select>

         
            <component :pushDbAfter="pushDbAfter" :componentId="componentId" v-for="(component,index) in components" :key="index" :is="component.com" @allClearOK="changePushDbAfter" @btnOn="btnChange" @click.native="selectMe(index)"></component>

            <div class="addBtn" @click="addComponent"><h2>+</h2></div>
            <v-btn
                elevation="2"
                large
                color="#FFCC80"
                block
                class="my-5"
                :loading="loading"
                :disabled="disabledCheck"
                @click="pushDb"
            >記録</v-btn>
        </v-form>
    </div>

</template>

<script>
import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"
import { setDoc, doc } from "firebase/firestore"
import inputArea from "./InputArea.vue"


initializeApp({
  apikey:process.env.VUE_APP_APIKEY,
  authDomain:process.env.VUE_APP_AUTHDOMAIN,
  projectId:process.env.VUE_APP_PROJECT_ID,
});

const db = getFirestore();

export default {
    components:{
        inputArea
    },
    data(){
        return{
            times:["朝ごはん","昼ごはん","おやつ","夜ごはん","夜食","その他"],
            disabled:true,
            otherCheck:true,
            loading:false,
            time:"",
            year:"",
            month:"",
            pushData:{day:"",month:"",time:"",meals:[]},
            components:[{com:'input-area'}],
            componentId:0,
            pushDbAfter:false,
        }
    },
    methods:{
        changePushDbAfter(){
            this.pushDbAfter = false;
        },
        selectMe(id){
            this.componentId = id;
        },
        btnChange(value){
            this.disabled = value;
        },
        async pushDb(){
            this.loading = true;
            this.pushData.time = this.time;
            const d = new Date();
            this.pushData.day = String(d.getDate());
            this.year = String(d.getFullYear());
            this.month = String(d.getMonth()+1)+String(Date.now());//idのこと
            this.pushData.meals = this.$store.state.meals;
            this.pushData.month = String(d.getMonth()+1);
            const dataRef = doc(db, this.year, this.month) ;
            try {
                await setDoc(dataRef, this.pushData);
                this.$emit("resultHiddenEvent","on");
                this.time = "";
                this.components = [{com:'input-area'}];
                this.$store.state.meals = [];
                this.pushData = {day:"",month:"",time:"",meals:[]};
                this.disabled = true;
                this.otherCheck = true;
                this.loading = false;
                this.pushDbAfter = true;
                setTimeout(()=>{
                    this.$emit("resultHiddenEvent","off");
                },3000);
            } catch (e) {
                console.error("Error adding document: ", e);
                alert("記録に失敗しました...");
            }
            this.loading = false;
        },
        addComponent(){
            if(this.time.length > 0 && this.disabled === false){
                this.components.push({com:'input-area'});
                this.disabled = true;
            }

        },
    },
    computed:{
        disabledCheck(){
            let flag = true;
            if((this.time.length > 0 && this.disabled === false)){
                flag = false;
            }
            return flag;
        },
    },
}
</script>

<style scoped>
.form{
    background-color: white;
    border: 3px solid #ffcc80c0;
    margin: 50px 12%;
    height: auto;
    padding: 10px 5%;
}
.form h3{
    margin: 20px auto;
    border: 2px solid rgba(143, 135, 135, 0.8);
    border-radius: 10px;
    text-align: center;
    width: 200px;
    
}
.addBtn{
    text-align: center;
    margin: 0 auto;
    border: 3px solid rgba(143, 135, 135, 0.8);
    border-radius: 50%;
    width: 50px;
    height: 50px;
    box-shadow: 2px -1px rgba(143, 135, 135, 0.8);
}
.addBtn:active{
    box-shadow: none;
    border: none;
}
.addBtn h2{
    padding: 5px 0;
}
</style>
