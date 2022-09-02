<template>
  <div class="box">
    <div class="avatar">
      <div><img src="../assets/my.jpg" /></div>
      <div class="content">
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;人的一生应当这样度过：当他回首往事时，不会因为碌碌无为，虚度年华而悔恨，也不会因为为人卑劣，生活庸俗而愧疚。
      </div>
    </div>
  </div>
</template>
<script>
</script>
<style scoped>
* {
  margin: 0;
  padding: 0;
}
.box{
    width: 67.5%;
    height: 100%;
    background-color: rgba(155, 185, 219, 0.8);
    margin-left: 0.3%;
}
.avatar{
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}
img {
  width: 260px;
  height: 260px;
  border-radius: 50%;
  margin-bottom: 10px;
}
.content{
    width: 300px;
    height: 100px;
    font-size: 20px;
}
</style>