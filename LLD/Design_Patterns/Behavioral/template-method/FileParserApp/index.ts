import { CSVParser } from "./CSVParser";
import { JSONParser } from "./JSONParser";

const csvParser = new CSVParser();
csvParser.parse();

const jsonParser = new JSONParser();
jsonParser.parse();
