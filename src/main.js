import { createApp } from 'vue'
import EventBus from './EventBus';
import App from './App.vue'
const app = createApp(App);
// app.provide('EventBus', EventBus);
app.use(EventBus);
app.mount('#app')
