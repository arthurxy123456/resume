<template>
  <div class="box">
    <!-- 列表 -->
    <div class="list">
      <div class="top" :class="{ active: flag }" @click="avatar">
        <img class="myimg" src="../assets/my.jpg" />
        <div>许洋</div>
        <div>好好学习,天天向上</div>
      </div>
      <div
        class="item"
        :class="{ select: selectindex == index }"
        v-for="(item, index) in list"
        :key="index"
        @click="go(index)"
      >
        <img class="png" :src="item.url" />
        <div>{{ item.name }}</div>
      </div>
    </div>
    <!-- 右边内容 -->
    <div class="rightBox">
      <router-view></router-view>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      flag: true,
      selectindex: 5,
      list: [
        {
          url: require("../assets/list/introduction.png"),
          name: "个人介绍",
          gopath: "introduction",
        },
        {
          url: require("../assets/list/skill.png"),
          name: "职业技能",
          gopath: "skill",
        },
        {
          url: require("../assets/list/project.png"),
          name: "项目经验",
          gopath: "project",
        },
        {
          url: require("../assets/list/hobbys.png"),
          name: "个人爱好",
          gopath: "hobbys",
        },
        {
          url: require("../assets/list/contact.png"),
          name: "联系方式",
          gopath: "contact",
        },
      ],
    };
  },
  methods: {
    avatar() {
      this.$router.push({
        name: "avatar",
      });
      this.flag = true;
      this.selectindex = 5;
    },
    go(index) {
      this.$router.push({
        name: this.list[index].gopath,
      });
      this.flag = false;
      this.selectindex = index;
    },
  }
};
</script>
<style scoped>
* {
  margin: 0;
  padding: 0;
}
.box {
  position: absolute;
  width: 60%;
  height: 80vh;
  border-radius: 20px;
  display: flex;
  margin-left: 20%;
}
/* 左边列表 */
.list {
  width: 30%;
  height: 100%;
  border-radius: 20px;
  background-color: rgba(155, 185, 219, 0.8);
}
/* 头像 */
.top {
  width: 100%;
  height: 30%;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
}
.myimg {
  width: 80px;
  height: 80px;
  border-radius: 50%;
  margin-bottom: 10px;
}
/* 矢量图 */
.item {
  width: 100%;
  height: 14%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
}
.png {
  width: 26px;
  height: 26px;
}
/* 鼠标效果 */
.active {
  background-color: skyblue;
  border-radius: 20px;
}
.select {
  background-color: skyblue;
  border-radius: 20px;
}
.top:hover {
  background-color: skyblue;
  border-radius: 20px;
}
.item:hover {
  background-color: skyblue;
  border-radius: 20px;
}
/* 右边 */
.rightBox {
  margin-left: 2%;
  flex-grow: 1;
}
</style>