<template>
    <div class="listArea">
        <div class="dateText"><h3>{{ yAndm.year}}{{ yAndm.month }}</h3></div>
        <div v-for="(list, index) in lists" :key="list.id" class="listItem">
            <div class="day" style="padding:10px 0;">
                <h3>{{ list.data.day }}</h3>
            </div>
            <div><h4>{{ list.data.time }}</h4></div>
            <ul>
                <li v-for="(meal,index) in list.data.meals" :key="index">
                {{ meal.genre }}:{{ meal.name }}/{{ meal.cal+"kcal" }}
                </li>
            </ul>
            <v-icon @click="deleteMe(list.id,index)" style="margin-top:10px;">mdi-delete</v-icon>
        </div>
        <Loading :class="loadStart"/>
    </div>
</template>

<script>
import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"
import { collection, query, where, getDocs, doc, deleteDoc } from "firebase/firestore"
import Loading from "@/components/Loading.vue"

//FireStoreとの連携
initializeApp({
  apikey:process.env.VUE_APP_APIKEY,
  authDomain:process.env.VUE_APP_AUTHDOMAIN,
  projectId:process.env.VUE_APP_PROJECT_ID,
});

const db = getFirestore();

export default {
    
    props:{
        //検索する年と月をもらう
        yAndm:{
            type:Object
        },
        //各判定用の変数
        checkShowList:{
            type:Boolean
        },
        loading:{
            type:Boolean
        }
    },
    components:{
        Loading
    },
    data(){
        return{
            lists:[],
            loadStart:"hidden",
        }
    },
    watch:{
        //Loadingコンポーネントの出現判定
        loading:function(){
            if(this.loading === true){
                this.loadStart = "";
            }else{
                this.loadStart = "hidden";
            }
        },
        //リストの表示判定
        checkShowList:async function(){
            if(this.checkShowList === true){
                this.lists = [];
                let array = [];
                let year = this.yAndm.year;
                let month = this.yAndm.month;
                const dataCheck = (currentdata) => currentdata.genre !== "NODATA";
                const q = query(collection(db, "users", this.$store.state.nowUserPass, this.$store.state.nowUserName, "Data", year), where("month", "==", month));

                const querySnapshot = await getDocs(q);
                querySnapshot.forEach((doc) => {
                    if(doc.data().meals.every(dataCheck)){
                        this.lists.push({id:doc.id,data:doc.data()});
                    }else{
                        doc.data().meals.forEach((meal,index)=>{
                            if(meal.genre === "NODATA"){
                                array = doc.data();
                                array.meals.splice(index,1);
                                console.log(array)
                            }
                        });
                        this.lists.push({id:doc.id,data:array});
                    }
                });
                if(this.lists.length <= 0){
                    alert("該当データが存在しません");
                }
                
                this.$emit("resetFlags",false);
            }
        },
    },
    methods:{
        async deleteMe(id,index){
            await deleteDoc(doc(db, "users", this.$store.state.nowUserPass, this.$store.state.nowUserName, "Data", this.yAndm.year, id));
            this.lists.splice(index,1);
        }
    },
    //マウント時、今年の今月のデータのリストを表示する
    async mounted(){
        const dataCheck = (currentdata) => currentdata.genre !== "NODATA";
        const d = new Date();
        let array = [];
        const nowMonth = String(d.getMonth()+1)+"月";
        const nowYear = String(d.getFullYear())+"年";
        this.yAndm.year = nowYear;
        this.yAndm.month = nowMonth;
        const q = query(collection(db, "users", this.$store.state.nowUserPass, this.$store.state.nowUserName, "Data", nowYear), where("month", "==", nowMonth));

        const querySnapshot = await getDocs(q);
        querySnapshot.forEach((doc) => {
            if(doc.data().meals.every(dataCheck)){
                this.lists.push({id:doc.id,data:doc.data()});
            }else{
                doc.data().meals.forEach((meal,index)=>{
                    if(meal.genre === "NODATA"){
                        array = doc.data();
                        array.meals.splice(index,1);
                    }
                });
                this.lists.push({id:doc.id,data:array});
            }
        });
        if(this.lists.length <= 0){
            alert("該当データが存在しません");
            
        }
        this.$emit("resetFlags",false);
    }
}
</script>

<style scoped>
.hidden{
    display: none;
}
.listItem{
    margin: 20px 20px;
    border: 2px solid rgba(220, 166, 0, 0.6);
    background-color: rgba(243, 196, 102, 0.651);
    border-radius: 10px;
    box-shadow: 1px 2px rgb(109, 108, 108);
    padding: 10px 10px;
}
.listArea{
    padding: 40px 0;
    margin: 30px 40px;
    background-color: rgba(255, 255, 255, 0.877);
    border: 2px solid gray;
    border-radius: 20px;
}
.dateText{
    padding-left: 10px;
}
</style>