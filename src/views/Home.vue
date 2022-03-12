<template>
    <div class="main">
        <div class="textBox">
            <h2>カロリー気にするのって、</h2>
            <h1>めんどくさい!!</h1>
            <h3>そんな時には「KIROKARA」</h3>
        </div>

        <div class="intro">
            <h4>こんな機能を持っています</h4>
            <p>↓  ↓  ↓</p>
            <ul>
                <li><v-icon>mdi-lead-pencil</v-icon>三項目入力するだけでカロリーを記録</li>
                <li><v-icon>mdi-book-outline</v-icon>記録したカロリーの一覧表示</li>
                <li><v-icon>mdi-chart-line</v-icon>一か月間のカロリーの推移をグラフで確認</li>
            </ul>
        </div>
        <p>カロリー参考:<span><a href="https://www.tanita.co.jp/content/calorism/table/index2.html" target="_blank" rel="noopener noreferrer">摂取カロリー早見表</a></span></p>

        <div class="startBtn" @click="start">
            <h4>今すぐ始める</h4>
        </div>
    </div>    
</template>

<script>
export default {
    methods:{
        start(){
            this.$router.push("/input");
        }
    },
    mounted(){
        if(this.$store.state.login === false){
            this.$router.push("/login");
        }
    }
}
</script>

<style scoped>
.main{
    animation-name:fadeInAnime;
    animation-duration:1s;
    animation-fill-mode:forwards;
    opacity:0;

}

@keyframes fadeInAnime{
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
}


.textBox{
    margin-top: 30px;
    text-align: center;
}
.textBox h1{
    font-size: 50px;
}
.textBox h3{
    margin: 30px 0;
}
.startBtn{
    position: sticky;
    right: 0;
    bottom: 30px;
    left: 90%;
    top: 0;
    background-color: #ffcc80be;
    border: 3px solid #FFCC80;
    border-radius: 50%;
    height: 125px;
    width: 125px;
}
.startBtn:hover{
    background-color: #ffcc8065;
}
.startBtn h4{
    text-align: center;
    line-height: 125px;
}
.intro{
    text-align: center;
    margin-top: 30px;
}
.intro ul{
    padding-left: 0;
    border: 3px solid rgb(83, 81, 81);
    margin: 30px 50px;
    border-radius: 20px;
}
.intro li{
    list-style: none;
    padding: 5px 0;
}
</style>