import { InvestorA } from "./InvestorA";
import { InvestorB } from "./InvestorB";
import { StockMarket } from "./StockMarket";

const stockMarket = new StockMarket(10);
const investorA = new InvestorA();
const investorB = new InvestorB();

stockMarket.registerInvestor(investorA);
stockMarket.registerInvestor(investorB);

stockMarket.setStockPrice("PRU", 100, 90);

stockMarket.removeInvestor(investorB);
stockMarket.setStockPrice("BH", 5, 15);
