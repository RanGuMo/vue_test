<template>
	<div class="school">
		<h2>学校名称：{{name}}</h2>
		<h2>学校地址：{{address}}</h2>
	</div>
</template>

<script>
import pubsub from 'pubsub-js'
	export default {
		name:'School',
		data() {
			return {
				name:'尚硅谷',
				address:'北京',
			}
		},
	    mounted() {
        this.pubId = pubsub.subscribe('hello',(msgName,data)=>{
			console.log('我订阅到了消息',msgName,data)
		})
			// console.log('School',this)
			// this.$bus.$on('hello',(data)=>{
			// 	console.log('我是School组件，收到了数据',data)
			// })
		},
		beforeDestroy() {
			//this.$bus.$off('hello')
			pubsub.unsubscribe(this.pubId)
		},
	}
</script>

<style scoped>
	.school{
		background-color: skyblue;
		padding: 5px;
	}
</style>