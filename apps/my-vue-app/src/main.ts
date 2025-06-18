import './styles.css';
import router from './router';
import { createApp } from 'vue';
import App from './app/App.vue';
import { createPinia } from 'pinia';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap'




const app = createApp(App);
app.use(router);
app.mount('#root');
app.use(createPinia());

app.config.errorHandler = (err,) => {
  console.error('[Global Error Handler]:', err);
};
