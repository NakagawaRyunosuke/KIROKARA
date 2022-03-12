<template>
<div class="loginForm">
    <h2>ログイン</h2>
    <v-form
        ref="form"
        v-model="valid"
        lazy-validation
    >
        <v-text-field
            v-model="name"
            :counter="10"
            :rules="nameRules"
            label="ユーザー名"
            required
        ></v-text-field>

        <v-text-field
            v-model="password"
            :counter="10"
            :rules="passRules"
            label="パスワード"
            required
        ></v-text-field>

        <p @click="addUser">[新規登録]</p>

        <v-btn
            :disabled="!valid"
            color="#ffcc80be"
            class="mr-4 loginBtn"
            @click="validate"
            :loading="loading"
        >
            ログイン
        </v-btn>
    </v-form>
</div>
    
</template>

<script>
import { collection, getDocs } from "firebase/firestore"
import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"

//FireStoreとの連携
initializeApp({
  apikey:process.env.VUE_APP_APIKEY,
  authDomain:process.env.VUE_APP_AUTHDOMAIN,
  projectId:process.env.VUE_APP_PROJECT_ID,
});

const db = getFirestore();

export default {
    data: () => ({
      valid: true,
      name: '',
      nameRules: [
        v => !!v || 'ニックネームを入力してください',
        v => (v && v.length <= 10) || 'ニックネームは10文字まででお願いします',
      ],
      password:"",
      passRules:[
        v => !!v || 'パスワードを入力してください',
        v => (v && v.length >= 6 && v.length <= 10) || 'パスワードは6文字以上、10文字以内でお願いします',
      ],
      loading:false,
    }),
    methods: {
        //ログイン処理
      async validate () {
        this.$refs.form.validate();
        if(this.name.length > 0 && this.password.length > 0){
            this.loading = true;
            //firestoreにユーザーのサブコレクションが存在しているかで判定
            const userRef = collection(db, "users", this.password, this.name);
            const snapShot = await getDocs(userRef);
            if(snapShot.empty === false){
                alert("ようこそ!"+" "+this.name+"様");
                this.$store.state.login = true;
                this.$store.state.nowUserName = this.name;
                this.$store.state.nowUserPass = this.password;
                this.$refs.form.reset();
                this.loading = false;
                this.$router.push("/");
            }else{
                alert("ログインできません");
                this.$refs.form.reset();
                this.loading = false;
            }
        }
      },
      //ユーザー登録ページへ遷移
      addUser(){
          this.$router.push("/adduser");
      }
    },
    //現在のユーザーの初期化
    mounted(){
        this.$store.state.nowUserName = "";
        this.$store.state.nowUserPass = "";
        this.$store.state.login = false;
    }
  }
</script>

<style scoped>
.loginForm{
    margin: 50px 60px;
    padding: 30px 30px;
    background-color: white;
    border: 3px solid #ffcc80be;
    text-align: center;
}
p:hover{
    color: orange;
}
.loginBtn{
    margin-left: 10px;
}
</style>