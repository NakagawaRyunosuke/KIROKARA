<template>
    <div>
        <SearchBtn class="searchBtn" :iconValue="iconValue" @showForm="showForm"/>
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
        showForm(value){
            this.formHidden = value;
        },
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
    position: sticky;
    top:80px;
    left:0;
    z-index: 2;
}
.hidden{
    display: none;
}
.search{
    position:sticky;
    top:60px;
    bottom: 0;
    left: 0;
    right: 0;
    height: 300px;
    z-index: 1;
}
.scrollStop{
    position: sticky;
    top:0;
}
</style>