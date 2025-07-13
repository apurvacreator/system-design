import { CreditCard } from "./CreditCard";
import { PaymentProcessor } from "./PaymentProcessor";
import { UPI } from "./UPI";

const paymentProcessor = new PaymentProcessor();

paymentProcessor.setPaymentStrategy(new CreditCard());
paymentProcessor.processPayment(1000);

paymentProcessor.setPaymentStrategy(new UPI());
paymentProcessor.processPayment(200);
