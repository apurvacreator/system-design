import { NetworkService } from "./NetworkService";

export class RealNetworkService implements NetworkService {
  private data: string;

  fetchData(input: string): string {
    this.data = `Data fetched from remote service for input: ${input}`;
    return this.data;
  }
}
