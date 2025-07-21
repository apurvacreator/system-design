import { NetworkService } from "./NetworkService";
import { NetworkServiceProxy } from "./NetworkServiceProxy";

const networkService: NetworkService =
  new NetworkServiceProxy();

let data = networkService.fetchData("en-US");
console.log(data);

data = networkService.fetchData("en-IN");
console.log(data);

data = networkService.fetchData("en-US");
console.log(data);
