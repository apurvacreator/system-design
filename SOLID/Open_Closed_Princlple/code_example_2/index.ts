import { CreditCard } from "./CreditCard";
import { PaymentProcessor } from "./PaymentProcessor";
import { UPI } from "./UPI";

const creditCard = new CreditCard("1234");
const upi = new UPI("apurva@ybl");

const paymentProcessor = new PaymentProcessor();

// Strategy Pattern
paymentProcessor.sendPayment(creditCard, 1000);
paymentProcessor.sendPayment(upi, 200);
