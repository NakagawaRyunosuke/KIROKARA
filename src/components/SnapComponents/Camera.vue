<template>
    <div>
        <div class="snapArea">
            <video class="video" :class="videoHidden" ref="video" width="200" height="270" autoplay playsinline muted></video>
            <canvas class="canvas" :class="canvasHidden" ref="canvas" width="200" height="270"></canvas>
        </div>

        <div class="snapBtn" :class="videoHidden" @click="snap">
            <h2>Snap!</h2>
        </div>
        <Loading v-show="loadHidden === ''" />
    </div>
</template>

<script>
import Loading from "./Loading.vue";
export default {
    components:{
        Loading
    },
    data(){
        return{
            video:{},
            canvas:{},
            captures:[],
            videoHidden:"",
            loadHidden:"hidden",
            canvasHidden:"hidden",
        }
    },
    mounted(){
        this.video = this.$refs.video;
        if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
          navigator.mediaDevices.getUserMedia({audio:false,video: { facingMode: "environment" }}).then(stream => {
            this.video.srcObject = stream;
            this.video.play();
          });
        }
    },
    methods:{
        snap(){
            this.canvas = this.$refs.canvas;
            this.canvas.getContext('2d').drawImage(this.video, 0,0,200,270);
            this.captures.push(this.canvas.toDataURL("image/png"));

            const tracks = this.video.srcObject.getTracks();
            tracks.forEach(track => {
                track.stop();
            });
            this.video.srcObject = null;
            this.videoHidden = "hidden";
            this.canvasHidde = "";
            console.log(this.captures)
            this.loadHidden = "";
        },
        
    }
}
</script>

<style scoped>
.video{
    border: 3px solid #FFCC80;
    border-radius: 20px;
}
.canvas{
    border: 3px solid #FFCC80;
    border-radius: 20px;
}
.snapArea{
    text-align: center;
    margin-top: 50px;
}
.snapBtn{
    margin: 0 auto;
    background-color: #ffcc80be;
    border: 3px solid #FFCC80;
    border-radius: 20px;
    height: 100px;
    width: 200px;
}
.snapBtn h2{
    text-align: center;
    line-height: 100px;
}
.snapBtn:hover{
    background-color: #ffcc8065;
}
.hidden{
    display: none;
}
</style>