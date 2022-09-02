<template>
    <div class="introduction">
        <div class="list" v-for="(item,index) in list" :key="index">
            <div class="box">
                <div class="item">{{item.name}}</div>
                <div class="content">{{item.content}}</div>
            </div>
            <hr>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            list: [
                {name:'性别：',content:'男'},
                {name:'籍贯：',content:'江苏'},
                {name:'生日：',content:'1999.09.09'},
                {name:'学历：',content:'全日制本科'},
                {name:'院校：',content:'湖北汽车工业学院科技学院'},
                {name:'专业：',content:'机械设计制造及其自动化'},
                {name:'职业：',content:'web前端开发'},
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
.introduction{
    width: 100%;
    height: 100%;
    background-color: rgba(155, 185, 219, 0.8);
    border-radius: 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
}
.list{
    margin-left: 10%;
}
.box{
    display: flex;
}
</style>