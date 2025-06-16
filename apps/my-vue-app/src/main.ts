import './styles.scss';
import router from './router';
import { createApp } from 'vue';
import App from './app/App.vue';
import { createPinia } from 'pinia';




const app = createApp(App);
app.use(router);
app.mount('#root');
app.use(createPinia());

app.config.errorHandler = (err,) => {
  console.error('[Global Error Handler]:', err);
};
