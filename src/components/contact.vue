<template>
    <div class="contact">
        <div class="list" v-for="(item,index) in list"  :key="index">
            <img :src="item.url">
            <div class="name">{{item.name}}</div>
            <div class="content">{{item.content}}</div>
        </div>
    </div>
</template>
<script>
export default{
    data() {
        return {
            list:[
                {url:require('../assets/contact/phone.png'),name:'电话：',content:'17362400537'},
                {url:require('../assets/contact/message.png'),name:'邮箱：',content:'3103075112@qq.com'},
                {url:require('../assets/contact/wechat.png'),name:'微信：',content:'Salute-Amor271'},
                {url:require('../assets/contact/address.png'),name:'地址：',content:'江苏盐城市XXX'}
            ]
        };
    },
}
</script>
<style scoped>
*{
    margin: 0;
    padding: 0;
}
.contact{
    width: 100%;
    height: 100%;
    border-radius: 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    background-color: rgba(155, 185, 219, 0.8);
}
.name{
    margin-left: 10px;
    font-size: large;
    font-weight: bold;
}
.list{
    margin-left: 20%;
    display: flex;
    align-items: center;
}
.content{
    margin-left: 20px;
}
img{
    width: 30px;
    height: 30px;
}
</style>