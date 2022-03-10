<template>
    <!-- DBへの登録処理が完了したら表示するコンポ―ネント -->
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
    border: 3px solid #fffefcc0;
    background-color: #f7d8a934;
    border-radius: 10px;
    text-align: center;
    line-height: 100px;
    color: rgb(36, 35, 35);
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