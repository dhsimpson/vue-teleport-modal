import { createApp } from 'vue'
import EventBus from './EventBus';
import modal from './modal';
import App from './App.vue';

const app = createApp(App);
app.use(EventBus);
app.use(modal);
app.mount('#app')
