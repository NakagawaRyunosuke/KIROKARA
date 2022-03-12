<template>
    <div>
        <SearchBtn class="searchBtn" :iconValue="iconValue" @showForm="formHidden=$event"/>
        <Search :class="formHidden" class="search" @showList="showList" @loading="loading" @formHidden="formHidden='hidden'" @iconValue="iconValueChange"/>
        <List :yAndm="yAndm" :checkShowList="checkShowList" :loading="loadingFlag" @resetFlags="resetFlags"/>
        
    </div>
</template>

<script>
import SearchBtn from "@/components/MemoComponents/SearchBtn.vue"
import Search from "@/components/MemoComponents/Search.vue"
import List from "@/components/MemoComponents/List.vue"
export default {
    components:{
        SearchBtn,
        Search,
        List,
        
    },
    data(){
        return{
            formHidden:"hidden",
            yAndm:{year:"",month:""},
            checkShowList:false,
            loadingFlag:false,
            iconValue:"",
        }
    },
    methods:{
        //検索マークがをされた時に×マークに変更する、逆もまたしかり
        iconValueChange(){
            //Searchコンポーネントのwatchで検出されるためにわざと空白を代入して一秒後に検索アイコンに戻す(力技)
            setTimeout(() => {
                this.iconValue = "mdi-magnify";
            }, 1000);
            this.iconValue = " ";
        },
        //各判定をリセット
        resetFlags(){
          this.loadingFlag = false;
          this.checkShowList = false;  
        },
        //検索をかける日付を子コンポーネントに渡し、OKサインを出す
        showList(value){
            this.yAndm.year = value.year;
            this.yAndm.month = value.month;
            this.checkShowList = true;
        },
        //Loadingコンポーネントの出現制御
        loading(value){
            this.loadingFlag = value;
        }
    },
    //ログインされていないとログイン画面に飛ばす
    mounted(){
        if(this.$store.state.login === false){
            this.$router.push("/");
        }
    }
}
</script>

<style scoped>
.searchBtn{
    position: absolute;
    top:20px;
    left:0;
    z-index: 2;
}
.hidden{
    display: none;
}
.search{
    position:absolute;
    top:0;
    bottom: 0;
    left: 0;
    right: 0;
    height: 300px;
    z-index: 1;
}


</style>