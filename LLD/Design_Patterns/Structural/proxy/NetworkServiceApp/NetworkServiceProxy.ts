import { NetworkService } from "./NetworkService";
import { RealNetworkService } from "./RealNetworkService";

export class NetworkServiceProxy implements NetworkService {
  private realNetworkService: RealNetworkService;
  private cache: Map<string, string>;

  constructor() {
    this.cache = new Map();
  }

  fetchData(input: string): string {
    const cached = this.cache.get(input);
    if (cached) {
      console.log("Fetching data from cache");
      return cached;
    }

    if (!this.realNetworkService) {
      this.realNetworkService = new RealNetworkService();
    }

    const data = this.realNetworkService.fetchData(input);
    this.cache.set(input, data);
    return data;
  }
}
