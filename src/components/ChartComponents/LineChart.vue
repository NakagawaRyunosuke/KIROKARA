<script>
import { Line } from 'vue-chartjs'
import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"
import { collection, query, where, getDocs } from "firebase/firestore"

//FireStoreとの連携
initializeApp({
  apikey:process.env.VUE_APP_APIKEY,
  authDomain:process.env.VUE_APP_AUTHDOMAIN,
  projectId:process.env.VUE_APP_PROJECT_ID,
});

const db = getFirestore();

export default {
    name: 'LineChart',
    extends: Line,
    data() {
        return {
            chartData: {
                labels: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16 , 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31],
                datasets: [{
                    label: 'カロリー推移表',
                    borderColor: '#FFCC80',
                    data: [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
                    fill: true
                }],
                nowMonth:"",
                nowYear:"",
                loadHidden:"",
            },
            options: {
                title: {
                    display: true,
                    text: ""
                },
                legend: {
                    display: false
                },
            }
        }
    },
    //firestoreから今月の一日ごとの合計カロリーを算出し、線グラフとして表示
    async mounted() {
        const d = new Date();
        const nowMonth = String(d.getMonth()+1)+"月";
        const nowYear = String(d.getFullYear())+"年";
        const q = query(collection(db, "users", this.$store.state.nowUserPass, this.$store.state.nowUserName, "Data", nowYear), where("month", "==", nowMonth));
        const querySnapshot = await getDocs(q);

        querySnapshot.forEach((item)=>{
            for(let i = 1; i <= 31; i++){
                if((String(i)+"日") === item.data().day){
                    for(let j = 0; j < item.data().meals.length; j++){
                        //もしデータが存在していたら、データ配列の対応するインデックスの要素に足す
                        if(item.data().meals[j].cal !== undefined){
                            this.chartData.datasets[0].data[i-1] += Number(item.data().meals[j].cal);
                        }
                        
                    }
                }
            }
        });

        this.renderChart(this.chartData, this.options);
        this.$emit("loadHidden","hidden");
    }
}

</script>