/* 
	该文件是整个项目的入口文件
*/
//引入Vue
import Vue from 'vue'
//引入App组件，它是所有组件的父组件
import App from './App.vue'
//引入混合
import {hunhe,hunhe2} from './mixin'
//关闭Vue的生产提示
Vue.config.productionTip = false

Vue.mixin(hunhe)  //全局混合
Vue.mixin(hunhe2) //全局混合

//创建Vue实例对象---vm
new Vue({
	el:'#app',
	//render函数完成了这个功能：将App组件放入容器中
    render: h => h(App)
	
})