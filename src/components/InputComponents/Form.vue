<template>
    <div class="form">
        <h3>カロリーを記録</h3>
        <v-form>
            <div>
                <p style="display:inline;">食べた日付:</p>
                <input type="date" v-model="date">
            </div>


            <v-select
                :items="times"
                label="食べた時間帯を選択"
                v-model="time"
            ></v-select>

            <!-- componentタグで配列に追加されたコンポーネントを逐次表示 -->
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
import { setDoc, doc, collection } from "firebase/firestore"
import inputArea from "./InputArea.vue"

//FireStoreとの連携
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
            disabled:true,//記録ボタンを押してよいか判断する変数
            otherCheck:true,//その他が入力された時にカロリー入力欄のdisabledを解除する変数
            loading:false,//ボタンのローディングを開始・停止する変数
            time:"",
            year:"",
            month:"",
            pushData:{day:"",month:"",time:"",meals:[]},//DBに保存するデータのひな形
            components:[{com:'input-area'}],//componentタグを使うときはケバブケースでコンポーネント名を記入
            componentId:0,
            pushDbAfter:false,
            date:""
        }
    },
    methods:{
        //記録ボタンが押されたことを子コンポーネントに通知する
        changePushDbAfter(){
            this.pushDbAfter = false;
        },
        //コンポーネントが触られた時にそのコンポーネントの識別番号を取得
        selectMe(id){
            this.componentId = id;
        },
        //ボタンが押せるか押せないかの判定
        btnChange(value){
            this.disabled = value;
        },
        //DBにデータを送信する
        async pushDb(){
            const dateArray = this.date.split("-");
            dateArray[1] = parseInt(dateArray[1],10); 
            this.loading = true;
            this.pushData.time = this.time;
            this.pushData.day = String(dateArray[2])+"日";
            this.year = dateArray[0]+"年";
            this.pushData.meals = this.$store.state.meals;
            this.pushData.month = String(dateArray[1])+"月";
            const userRef = collection(db, "users", this.$store.state.nowUserPass, this.$store.state.nowUserName, "Data", this.year);
            try {
                await setDoc(doc(userRef),this.pushData);

                //完了通知コンポーネントを表示させる
                this.$emit("resultHiddenEvent","on");
                //各データの初期化
                this.time = "";
                this.components = [{com:'input-area'}];
                this.$store.state.meals = [];
                this.pushData = {day:"",month:"",time:"",meals:[]};
                this.disabled = true;
                this.otherCheck = true;
                this.loading = false;
                this.pushDbAfter = true;
                setTimeout(()=>{
                    //三秒後間完了通知コンポーネントの表示
                    this.$emit("resultHiddenEvent","off");
                },3000);
            } catch (e) {
                console.error("Error adding document: ", e);
                alert("記録に失敗しました...");
            }
            this.loading = false;
        },
        //入力フォームの追加
        addComponent(){
            //フォームが埋まっていない次のフォームを追加できない
            if(this.time.length > 0 && this.disabled === false){
                this.components.push({com:'input-area'});
                this.disabled = true;
            }

        },
    },
    computed:{
        //記録ボタンを押してよいか最終的な判断
        disabledCheck(){
            let flag = true;
            if((this.time.length > 0 && this.disabled === false)){
                flag = false;
            }
            return flag;
        },
    },
    mounted(){
        let month = "";
        let date = "";
        const d = new Date();
        if(String(d.getMonth()+1).length <= 1){
            month = "0"+String(d.getMonth()+1);
        }else{
            month = String(d.getMonth()+1);
        }
        if(String(d.getDate()).length <= 1){
            date = "0"+String(d.getDate());
        }else{
            date = String(d.getDate());
        }
        this.date = String(d.getFullYear())+"-"+month+"-"+date;
        console.log(this.date)
    }
}
</script>

<style scoped>
.form{
    background-color: white;
    border: 3px solid gray;
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
