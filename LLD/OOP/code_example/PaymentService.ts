import { PaymentMethod } from "./PaymentMethod";

export class PaymentService {
    paymentMethods: Map<string, PaymentMethod>;

    constructor() {
        this.paymentMethods = new Map();
    }

    addPaymentMethod(name: string, paymentMethod: PaymentMethod) {
        this.paymentMethods.set(name, paymentMethod);
    }

    makePayment(name: string) {
        const pm = this.paymentMethods.get(name);
        // Polymorphism
        pm?.pay();
    }
}