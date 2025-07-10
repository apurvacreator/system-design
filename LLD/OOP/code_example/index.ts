import { CreditCard } from "./CreditCard";
import { DebitCard } from "./DebitCard";
import { PaymentService } from "./PaymentService";
import { Upi } from "./Upi";
import { Wallet } from "./Wallet";

const paymentService = new PaymentService();

paymentService.addPaymentMethod('ApurvaCC', new CreditCard('Apurva Mukherjee', '1234'));
paymentService.addPaymentMethod('ApurvaDC', new DebitCard('Apurva Mukherjee', '5678'));
paymentService.addPaymentMethod('ApurvaUpi', new Upi('apurva@ybl'));
paymentService.addPaymentMethod('ApurvaWallet', new Wallet());


paymentService.makePayment('ApurvaCC');
paymentService.makePayment('ApurvaUpi');
paymentService.makePayment('ApurvaWallet');
