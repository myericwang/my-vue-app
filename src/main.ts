import { createApp } from 'vue'
import App from './App.vue'

createApp(App).mount('#app')


const vm = createApp({
    data(){
        return{
            ischeck: true
        }
    }
})

const a = vm.mount('#section2');
