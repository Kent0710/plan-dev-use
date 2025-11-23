import { inject } from "@vercel/analytics";
inject(); // enable Vercel Analytics

import { App } from "./app-class.js";

const app = new App();
app.init();