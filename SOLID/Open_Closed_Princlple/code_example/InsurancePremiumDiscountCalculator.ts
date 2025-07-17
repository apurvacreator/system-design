import { CustomerProfile } from "./CustomerProfile";

export class InsurancePremiumDiscountCalculator {
  calculatePremiumDiscountPercent(
    customer: CustomerProfile
  ) {
    if (customer.isLoyal()) {
      return 20;
    }
    return 0;
  }
}
