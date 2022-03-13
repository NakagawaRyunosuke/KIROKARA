<template>
    <div class="inputDate" style="position:fixed;">
        <v-select
          :items="years"
          label="何年？"
          solo
          v-model="yAndm.year"
        ></v-select>

        <v-select
          :items="months"
          label="何月？"
          solo
          v-model="yAndm.month"
        ></v-select>

        <v-btn
            color="#FFCC80"
            block
            :disabled="disabledCheck"
            @click="showList"
        >検索</v-btn>
    </div>
</template>

<script>
export default {
    data(){
        return{
            years:["2022年","2023年","2024年"],
            months:["4月","5月","6月","7月","8月","9月","10月","11月","12月","1月","2月","3月"],
            yAndm:{year:"",month:""},
        }
    },
    methods:{
        //様々なイベント発火
        showList(){
            this.$emit("showList",this.yAndm);
            this.$emit("loading",true);
            this.$emit("formHidden","hidden");
            this.$emit("iconValue");
        }
    },
    computed:{
        //検索ボタンのdisabled判定
        disabledCheck(){
            let disabled = true;
            if(this.yAndm.year.length > 0 && this.yAndm.month.length > 0){
                disabled = false;
            }
            return disabled;
        }
    }
}
</script>

<style scoped>
.inputDate{
    text-align: center;
    background-color: rgba(77, 75, 75, 0.493);
    border: 5px solid orange;
    padding: 40px 80px;
}
</style>