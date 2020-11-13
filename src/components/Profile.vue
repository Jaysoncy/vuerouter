<template>
    <div class="home">
        <h2>我是用户的档案</h2>
        <h2>{{$route.query}}</h2>
        <h2>{{$route.query.age}}</h2>
        <h2>{{$route.query.name}}</h2>
    </div>
</template>

<script>
export default {
    name: 'Profile',
    created(){
        console.log('created');
        // document.title = '档案'
    },
}
</script>