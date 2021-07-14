import { createApp } from 'vue'
import App from './App.vue'
import './firebase'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import router from './router.js'


const app = new createApp(App)
// const router = new VueRouter({
//     routes // short for `routes: routes`
// })
app.use(router)
app.mount('#app')

