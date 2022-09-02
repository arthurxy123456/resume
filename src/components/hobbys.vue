<template>
  <div class="hobbys">
    <div class="block">
      <span class="demonstration">图集</span>
      <el-carousel height="400px">
        <el-carousel-item v-for="(item, index) in imgList" :key="index">
          <img :src="item.url" />
        </el-carousel-item>
      </el-carousel>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      imgList: [
        { url: require("../assets/hobbys/1.jpg") },
        { url: require("../assets/hobbys/2.jpg") },
        { url: require("../assets/hobbys/3.jpg") },
        { url: require("../assets/hobbys/4.jpg") },
      ],
    };
  },
};
</script>
<style scoped>
img {
  width: 100%;
  height: 400px;
}
.hobbys {
  background-color: rgba(155, 185, 219, 0.8);
  width: 100%;
  height: 100%;
  border-radius: 20px;
}
.block {
  width: 90%;
  height: 80%;
  margin: 0 auto;
}
.demonstration {
  font-size: 25px;
  font-weight: bold;
  display: flex;
  justify-content: center;
  margin-bottom: 5%;
}
.el-carousel__item h3 {
  color: #475669;
  font-size: 14px;
  opacity: 0.75;
  line-height: 150px;
  margin: 0;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}
</style>