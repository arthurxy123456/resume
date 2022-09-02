<template>
    <div id="app">
        <img class="bassic" src="./assets/city.jpg">
        <h1>许洋个人简历</h1>
        <router-view></router-view>
    </div>
</template>
<script>

</script>
<style>
*{
    margin: 0;
    padding: 0;
}
#app{
    position: relative;
}
.bassic{
    position: absolute;
    width: 100%;
    height: 100vh;
    left: 0;
    top: 0;
}
h1{
    position: relative;
    font-size: 40px;
    margin-left: 42%;
    margin-bottom: 2%;
}
</style>