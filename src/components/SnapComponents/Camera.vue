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
        <p :v-model="text"></p>
    </div>
</template>

<script>
import Loading from "./Loading.vue";
import axios from "axios";
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
            text:""
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
            this.loadHidden = "";
            this.runOcr();
        },
        runOcr(){
            const ENDPOINT = process.env.VUE_APP_ENDPOINT;
            const APIKEY = process.env.VUE_APP_APIKEY;
            const imageUrl = this.makeblob(this.captures[this.captures.length - 1]);
            console.log(ENDPOINT+" "+APIKEY+" "+imageUrl+" ");
            axios.post(
                ENDPOINT,
                imageUrl,
                {
                    headers: {
                        'Content-type': 'application/octet-stream',
                        'Ocp-Apim-Subscription-Key': APIKEY
                    }
                },
            )
            .then((res)=>{
                console.log(res.data);
                this.fullText(res);
                this.loadHidden = "hidden";
            })
            .catch((error)=>{
                console.log(error);
            })
        },
        makeblob(dataURL){
            let BASE64_MARKER = ';base64,';
            if (dataURL.indexOf(BASE64_MARKER) == -1) {
                let parts = dataURL.split(',');
                let contentType = parts[0].split(':')[1];
                let raw = decodeURIComponent(parts[1]);
                return new Blob([raw], {type: contentType});
            }
            let parts = dataURL.split(BASE64_MARKER);
            let contentType = parts[0].split(':')[1];
            let raw = window.atob(parts[1]);
            let rawLength = raw.length;
            let uInt8Array = new Uint8Array(rawLength);
            for (let i = 0; i < rawLength; ++i) {
                uInt8Array[i] = raw.charCodeAt(i);
            }
            return new Blob([uInt8Array], {type: contentType})
        },
        fullText(res){
            for(let i = 0; i <= res.data.regions[0].lines.length -1; i++){
                for(let j = 0; j <= res.data.regions[0].lines[i].words.length - 1 ; j++){
                    this.text = this.text + res.data.regions[0].lines[i].words[j].text ;
                }
            }
        }
        
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