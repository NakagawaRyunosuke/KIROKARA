<template>
<!-- componentタグに追加するコンポーネント -->
    <div class="inputForm">
        <div class="clearBtn" @click="clear"><h3>Clear</h3></div>
        <v-select
            :items="genres"
            label="ジャンル"
            v-model="genre"
            @change="changeGenre"
        ></v-select>
        <v-select
            :items="names"
            label="料理名"
            item-text="title"
            v-model="name"
            @change="showCal"
        ></v-select>
        <v-text-field
            label="カロリーを入力"
            hint="嘘はついたらだめだからね (^^)"
            v-model="cal"
            :disabled="otherCheck"
            :rules="[rules.typeCheck]"
        ></v-text-field>
    </div>
</template>

<script>
export default {
    props:{
        //現在いじられているコンポーネントの識別番号を受け取る
        componentId:{
            type:Number
        },
        //記録ボタンが押され、フォームを初期化して良いかどうかの通知の受け皿
        pushDbAfter:{
            type:Boolean
        }
    },
    data(){
        return{
            genres:["基本メニュー","和食","洋食","中華","サラダ","デザート/飲み物"],
            basic:[{title:"ご飯小盛り",cal:"168"},{title:"ご飯普通盛り",cal:"235"},{title:"ご飯大盛り",cal:"403"},{title:"食パン1枚(6枚切り)",cal:"177"},{title:"食パン1枚(8枚切り)"}],
            japanese:[{title:"かつ丼",cal:"893"},{title:"親子丼",cal:"731"},{title:"天丼",cal:"805"},{title:"牛丼",cal:"909"},{title:"卵丼",cal:"630"},{title:"鉄火丼",cal:"649"},{title:"ネギトロ丼",cal:"786"},{title:"中華丼",cal:"841"},{title:"うな重",cal:"754"},{title:"五目チラシ",cal:"618"},{title:"刺身定食",cal:"489"},{title:"アジの塩焼き定食",cal:"480"},{title:"ぶりの照り焼き定食",cal:"646"},{title:"サバの味噌煮定食",cal:"687"},{title:"生姜焼き定食",cal:"789"},{title:"鶏の照り焼き定食",cal:"776"},{title:"雑炊",cal:"336"},{title:"梅茶漬け",cal:"171"},{title:"天ぷらそば",cal:"459"},{title:"ざるそば",cal:"284"},{title:"かけそば",cal:"324"},{title:"たぬきそば",cal:"376"},{title:"きつねそば",cal:"382"},{title:"月見うどん",cal:"419"},{title:"焼きそば",cal:"570"},{title:"お好み焼き",cal:"553"},{title:"広島焼き",cal:"633"},{title:"たこ焼き",cal:"270"},{title:"ヒレカツ",cal:"310"},{title:"串カツ",cal:"372"},{title:"ロースかつ",cal:"439"},{title:"カキフライ",cal:"299"},{title:"その他"}],
            western:[{title:"ミートソーススパゲッティ",cal:"597"},{title:"カルボナーラ",cal:"830"},{title:"ペペロンチーノ",cal:"561"},{title:"和風ツナおろしスパゲッティ",cal:"640"},{title:"タラコスパゲッティ",cal:"524"},{title:"ボンゴレスパゲッティ",cal:"527"},{title:"ピザSサイズ",cal:"538"},{title:"エビグラタン",cal:"560"},{title:"チキングラタン",cal:"647"},{title:"ポテトグラタン",cal:"687"},{title:"ハンバーガー",cal:"300"},{title:"チーズバーガー",cal:"368"},{title:"フライドポテトS",cal:"194"},{title:"ビーフカレー",cal:"954"},{title:"チキンカレー",cal:"690"},{title:"野菜カレー",cal:"686"},{title:"カツカレー",cal:"957"},{title:"ドライカレー",cal:"615"},{title:"ハヤシライス",cal:"728"},{title:"エビピラフ",cal:"573"},{title:"チキンピラフ",cal:"636"},{title:"オムライス",cal:"843"},{title:"ドリア",cal:"813"},{title:"キノコリゾット",cal:"382"},{title:"ハンバーグ",cal:"437"},{title:"和風ハンバーグ",cal:"441"},{title:"デミグラスハンバーグ",cal:"471"},{title:"照り焼きハンバーグ",cal:"448"},{title:"サーロインステーキ",cal:"805"},{title:"ヒレステーキ",cal:"507"},{title:"ロールキャベツ",cal:"264"},{title:"チキンソテー",cal:"580"},{title:"その他"}],
            chinese:[{title:"ラーメン",cal:"443"},{title:"塩ラーメン",cal:"401"},{title:"味噌ラーメン",cal:"477"},{title:"五目ラーメン",cal:"665"},{title:"チャーシュー麺",cal:"507"},{title:"冷やし中華",cal:"467"},{title:"冷麺",cal:"404"},{title:"あんかけかた焼きそば",cal:"918"},{title:"あんかけ焼きそば",cal:"517"},{title:"焼きビーフン",cal:"627"},{title:"麻婆豆腐",cal:"413"},{title:"青椒肉絲定食",cal:"487"},{title:"八宝菜",cal:"393"},{title:"回鍋肉",cal:"557"},{title:"エビチリ",cal:"408"},{title:"麻婆茄子",cal:"450"},{title:"チャーハン",cal:"754"},{title:"五目チャーハン",cal:"703"},{title:"ビビンバ",cal:"550"},{title:"クッパ",cal:"381"},{title:"かに玉",cal:"218"},{title:"酢豚",cal:"467"},{title:"みそ炒め",cal:"250"},{title:"レバニラ炒め",cal:"220"},{title:"ギョーザ",cal:"423"},{title:"シューマイ",cal:"282"},{title:"小籠包",cal:"274"},{title:"春巻き",cal:"369"},{title:"ちまき",cal:"310"},{title:"にら饅頭",cal:"259"},{title:"バンバンジー",cal:"230"},{title:"肉まん",cal:"201"},{title:"その他"}],
            sarada:[{title:"普通のサラダ",cal:"21"},{title:"マヨネーズあり",cal:"126"},{title:"ドレッシングあり",cal:"82"},{title:"ノンオイルドレッシングあり",cal:"33"},{title:"塩あり",cal:"21"},{title:"その他"}],
            dd:[{title:"コーヒー",cal:"7"},{title:"オレンジジュース",cal:"82"},{title:"クリームソーダ",cal:"137"},{title:"ミルクティー",cal:"68"},{title:"ミルクココア",cal:"196"},{title:"カフェオレ",cal:"71"},{title:"ビール(中ジョッキ)",cal:"140"},{title:"ワイン(グラス)",cal:"88"},{title:"日本酒(一合)",cal:"185"},{title:"焼酎(ロック　グラス)",cal:"146"},{title:"グレープフルーツサワー(ジョッキ)",cal:"238"},{title:"ウーロンハイ(ジョッキ)",cal:"103"},{title:"アイスクリーム",cal:"196"},{title:"プリンアラモード",cal:"219"},{title:"杏仁豆腐",cal:"125"},{title:"コーヒーゼリー",cal:"136"},{title:"かぼちゃのタルト",cal:"343"},{title:"レアチーズケーキ",cal:"297"},{title:"シュークリーム",cal:"209"},{title:"チーズケーキ",cal:"281"},{title:"ショートケーキ",cal:"292"},{title:"ミルフィーユ",cal:"448"},{title:"ベリータルト",cal:"397"},{title:"チョコレートケーキ",cal:"352"},{title:"あんみつ",cal:"247"},{title:"みつ豆",cal:"189"},{title:"クリームみつ豆",cal:"295"},{title:"クリームあんみつ",cal:"353"},{title:"白玉あんみつ",cal:"260"},{title:"抹茶クリーム白玉ぜんざい",cal:"428"},{title:"たい焼き",cal:"211"},{title:"どらやき",cal:"256"},{title:"今川焼",cal:"197"},{title:"ところてん",cal:"17"},{title:"くずもち",cal:"184"},{title:"みたらし団子",cal:"118"},{title:"こしあん団子",cal:"131"},{title:"カステラ(一切れ)",cal:"160"},{title:"その他"}],
            names:[],//genreから選ばれたメニューが入る
            name:"",
            genre:"",
            cal:"",
            otherCheck:true,
            rules: {
                typeCheck: value => !isNaN(Number(value))  || '半角数字のみで大丈夫です',//その他選択時のcal欄の記入ルール
            },
        }
    },
    methods:{
        //genreによってその次のセレクトボックスの選択肢を変える
        changeGenre(){
            this.cal = "";
            if(this.genre === "基本メニュー"){
                this.names = this.basic;
            }else if(this.genre === "和食"){
                this.names = this.japanese;
            }else if(this.genre === "洋食"){
                this.names = this.western;
            }else if(this.genre === "中華"){
                this.names = this.chinese;
            }else if(this.genre === "サラダ"){
                this.names = this.sarada;
            }else if(this.genre === "デザート/飲み物"){
                this.names = this.dd;
            }
        },
        //その他が選ばれた時、自分でカロリーを入力できるようにする
        showCal(){
            this.otherCheck = true;
            this.names.forEach((item,index)=>{
                if(item.title === this.name){
                    this.cal = this.names[index].cal;
                    if(this.name === "その他"){
                        this.cal = "";
                        this.otherCheck = false;
                    }
                }
            });
        },
        //フォームの入力欄のリセット
        clear(){
            const dataCheck = (currentdata) => currentdata.genre === "NODATA";
            //clearボタンが押された時、そのコンポーネントの識別番号を取得する前にclear()が動いてしまうのを防ぐため一秒遅らせている（もっといい方法があるはず...）
            setTimeout(() => {
                this.$store.state.meals[this.componentId] = {genre:"NODATA"};//storeのもともと登録されていた場所を空にしないために"NODATA"を挿入
                if(this.$store.state.meals.every(dataCheck)){ //全ての要素が"NODATA"ならば記録ボタンは作動しない
                     this.$emit("btnOn",true);
                }else{
                    this.$emit("btnOn",false);
                }
            }, 1000);
            
            this.genre = "";
            this.name = "";
            this.cal = "";
        }
    },
    watch:{
        //genreだけで登録されるのを防ぐ
        genre:function(){
            this.$emit("btnOn",true);
        },
        //フォームがの入力欄を全て満たしているかチェック
        cal:function(){        
            if(((this.cal.length > 0) && !isNaN(Number(this.cal)))){
                this.$store.state.meals[this.componentId] = {genre:this.genre,name:this.name,cal:this.cal};
                //親コンポーネントのボタンをアクティブに
                this.$emit("btnOn",false);
            }else{return this.$emit("btnOn",true);}
        },
        //親の記録ボタンが押されたら各データの初期化
        pushDbAfter:function(){
            if(this.pushDbAfter === true){
                this.name = "";
                this.genre = "";
                this.cal = "";
                this.$emit("allClearOK",false);
            }
        }
    }
}
</script>

<style scoped>
.inputForm{
    border: 2px solid rgb(134, 130, 130);
    border-radius: 20px;
    padding: 10px 5px;
    margin: 5px 0;
}
.clearBtn{
    width: 100px;
    height: 30px;
    text-align: center;
    border: 2px solid rgba(143, 135, 135, 0.8);
    border-radius: 30px;
    padding: 0 0;
    box-shadow: 2px -1px rgba(143, 135, 135, 0.8);
}
.clearBtn:active{
    box-shadow: none;
    border: none;
}

</style>