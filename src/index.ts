import Vue, { VNode } from 'vue'

import App from './App.vue'
import router from './router'

import './index.css'

const container = document.createElement('div')
container.id = 'app-container'
document.body.appendChild(container)

new Vue({
    router,
    el: '#app-container',
    render: (h): VNode => h(App),
})
