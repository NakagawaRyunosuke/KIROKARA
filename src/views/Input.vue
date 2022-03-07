<template>
    <div>
        <Form @resultHiddenEvent="onOff"/>
        <Loading :class="onLoad"/>
        <Result :class="resultHidden"/>
    </div>
</template>

<script>
import Form from "../components/InputComponents/Form.vue";
import Loading from "../components/InputComponents/Loading.vue";
import Result from "../components/InputComponents/Result.vue";
export default {
    components:{
        Form,
        Loading,
        Result
    },
    data(){
        return{
            onLoad:"hidden",
            resultHidden:"hidden"
        }
    },
    methods:{
        onOff(value){
            console.log(value)
            if(value === "on"){
                this.resultHidden = "";
            }else if(value === "off"){
                this.resultHidden = "hidden";
            }
        }
    }
}
</script>

<style scoped>
.hidden{
    display: none;
}
</style>