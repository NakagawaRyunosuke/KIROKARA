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
                labels: ["1日", "2日", "3日", "4日", "5日", "6日", "7日", "8日", "9日", "10日", "11日", "12日", "13日", "14日", "15日", "16日" , "17日", "18日", "19日", "20日", "21日", "22日", "23日", "24日", "25日", "26日", "27日", "28日", "29日", "30日", "31日"],
                datasets: [{
                    label: 'カロリー',
                    borderColor: '#FFCC80',
                    data: [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
                    fill: true
                }],
            },
            options: {
                title: {
                    display: true,
                    text: ""
                },
                legend: {
                    display: false
                },
                scales:{
                    yAxes:[{
                        scaleLabel: {
                            display: true,
                            labelString: 'kcal',
                        },
                    }]
                }
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
            let date = parseInt(item.data().day.replace("日",""),10);
            for(let i = 1; i <= 31; i++){
                if((String(i)+"日") === (String(date)+"日")){
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