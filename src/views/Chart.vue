<template>
    <div class="chartArea">
        <h2>今月のカロリーの推移</h2>
        <line-chart
            class=chart
            @loadHidden="loadHidden=$event"
        />
        <Loading :class="loadHidden"/>
    </div>
</template>

<script>
import LineChart from '@/components/ChartComponents/LineChart.vue'
import Loading from "@/components/Loading.vue"


export default {
    components: { LineChart,Loading },
    data(){
        return{
            loadHidden:""
        }
    },
    mounted(){
        if(this.$store.state.login === false){
            this.$router.push("/");
        }
    }
}
</script>

<style>
.chart {
    width: 350px;
    height: 350px;
    margin: 0 auto;
}
.chartArea{
    margin: 50px 20px;
    padding: 20px 0;
    text-align: center;
    background-color: white;
    border: 2px solid gray;
    border-radius: 20px;
}
.hidden{
    display: none;
}
</style>