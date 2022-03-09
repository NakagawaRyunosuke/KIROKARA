<template>
    <div class="main">
        <h4>記録が完了しました</h4>
    </div>
</template>

<style scoped>
.main{
    animation-name:fadeInAnime;
    animation-duration:1s;
    animation-fill-mode:forwards;
    opacity:0;
    position: absolute;
    top:0%;
    right:0%;
    background-color: rgba(0, 0, 0, 0.5);
    width:100%;
    height:100%;
}
.main h4{
    position: absolute;
    left:0;
    right:0;
    top:0;
    bottom:0;
    width:200px;
    height:100px;
    margin: auto;
    border: 3px solid #ffcc8050;
    border-radius:50px;
    background-color: rgba(255, 255, 255, 0.274);
    text-align: center;
    line-height: 100px;
    color: #0a0501ea;
}

@keyframes fadeInAnime{
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
}
</style>