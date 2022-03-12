<template>
    <v-btn
      class="mx-2"
      fab
      dark
      small
      color="orange"
      :loading="load"
      @click="showForm"
    >
      <v-icon dark>
        {{icon}}
      </v-icon>
    </v-btn>
</template>

<script>
export default {
    props:{
        iconValue:{
            type:String
        }
    },
    data(){
        return{
            icon:"mdi-magnify",
            load:false
        }
    },
    methods:{
        //ボタンが押された時に検索フォームを出現させる
        showForm(){
            if(this.icon === "X"){
                this.icon = "mdi-magnify";
                this.$emit("showForm","hidden");
            }else{
                this.icon = "X";
                this.$emit("showForm","");
            }
        }
    },
    watch:{
        //検索アイコンと×アイコンの切り替え
        iconValue:function(){
            this.load = true;
            //ボタンのアイコンが検索マークに戻るまでローディングでごまかす
            setTimeout(() => {
                this.load = false;
            }, 1000);
            this.icon = this.iconValue;
        }
    }
}
</script>