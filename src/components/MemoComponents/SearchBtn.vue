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
        iconValue:function(){
            this.load = true;
            setTimeout(() => {
                this.load = false;
            }, 1000);
            this.icon = this.iconValue;
        }
    }
}
</script>