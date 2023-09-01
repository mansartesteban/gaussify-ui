import { createApp } from 'vue';
import App from './App.vue';

import "@/assets/styles/main.scss";

import PluginsConfig from './plugins';

const app = createApp(App);

PluginsConfig(app);

app.mount('#app');
