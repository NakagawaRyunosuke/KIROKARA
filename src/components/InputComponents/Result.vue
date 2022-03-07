<template>
    <div class="main">
        <h4>記録が完了しました。</h4>
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
    height: 100%;
    width: 100%;
    text-align: center;
}
.main h4{
    margin: 40% 30%;
    border: 3px solid #ffcc80c0;
    border-radius: 10px;
    background-color: rgb(255, 255, 255);
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