import { createApp } from "vue";
import { createPinia } from "pinia";
import { Quasar, Notify } from "quasar";
import VNetworkGraph from "v-network-graph";
import "v-network-graph/lib/style.css";

// Import icon libraries
import "@quasar/extras/material-icons/material-icons.css";

// Import Quasar css
import "quasar/src/css/index.sass";

import App from "./App.vue";
import router from "./router";

const app = createApp(App);

app.use(createPinia());
app.use(router);
app.use(Quasar, {
  plugins: {
    Notify,
  },
});
app.use(VNetworkGraph);

app.mount("#app");
