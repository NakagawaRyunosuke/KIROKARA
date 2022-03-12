<template>
    <div>
        <Form @resultHiddenEvent="onOff"/>
        <Result :class="resultHidden"/>
    </div>
</template>

<script>
import Form from "../components/InputComponents/Form.vue";
import Result from "../components/InputComponents/Result.vue";
export default {
    components:{
        Form,
        Result
    },
    data(){
        return{
            resultHidden:"hidden",
            currentPath:"/input"
        }
    },
    methods:{
        //Resultコンポーネントの表示/非表示の切り替え
        onOff(value){
            if(value === "on"){
                this.resultHidden = "";
            }else if(value === "off"){
                this.resultHidden = "hidden";
            }
        }
    },
    mounted(){
        if(this.$store.state.login === false){
            this.$router.push("/");
        }
    }
}
</script>

<style scoped>
.hidden{
    display: none;
}
</style>