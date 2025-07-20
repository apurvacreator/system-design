import { AppSettings } from "./AppSettings";

const app1 = AppSettings.getInstace();
const app2 = AppSettings.getInstace();

console.log(app1.getApiKey());

console.log(app1 === app2);
