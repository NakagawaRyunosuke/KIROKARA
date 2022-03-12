<template>
<div class="adduserForm">
    <h2>ユーザー登録</h2>
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

        <v-btn
            :disabled="!valid"
            color="#ffcc80be"
            class="mr-4 loginBtn"
            @click="validate"
            :loading="loading"
        >
            登録
        </v-btn>
    </v-form>
</div>
    
</template>

<script>
import { setDoc, doc, collection } from "firebase/firestore"
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
        v => (v && v.length >= 6 && v.length <= 10) || 'ニックネームは6文字以上、10文字以内でお願いします',
      ],
      loading:false,
    }),
    methods: {
      //ユーザー作成処理
      //ユーザーの名前とパスワードでサブコレクションを作成
      async validate () {
        this.$refs.form.validate();
        if(this.name.length > 0 && this.password.length > 0){
            const userData = {name:this.name,pass:this.password};
            this.loading = true;
            const usersCollectionRef = collection(db,"users", this.password, this.name);
            await setDoc(doc(usersCollectionRef),userData)
            .then(()=>{
                this.$refs.form.reset();
                this.loading = false;
                alert("作成完了");
                this.$router.push("/");
            })
            .catch((error)=>{
                console.log(error);
                this.$refs.form.reset();
                alert("もう一度やり直してください");
                this.loading = false;
            });

        }
      },
      reset () {
        this.$refs.form.reset()
      },
    },
  }
</script>

<style scoped>
.adduserForm{
    margin: 50px 60px;
    padding: 30px 30px;
    background-color: white;
    border: 3px solid #ffcc80be;
    text-align: center;
}
p:hover{
    color: orange;
}
.adduserBtn{
    margin-left: 20px;
}
</style>