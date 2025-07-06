import { HealthInsuranceCustomerProfile } from "./HealthInsuranceCustomerProfile copy";
import { InsurancePremiumDiscountCalculator } from "./InsurancePremiumDiscountCalculator";
import { VehicleInsuranceCustomerProfile } from "./VehicleInsuranceCustomerProfile";

const healthInsuranceCustomer =
  new HealthInsuranceCustomerProfile();
const vehicleInsuranceCustomer =
  new VehicleInsuranceCustomerProfile();

const insurancePremiumDiscountCalculator =
  new InsurancePremiumDiscountCalculator();
const healthInsuranceCustomerDiscount =
  insurancePremiumDiscountCalculator.calculatePremiumDiscountPercent(
    healthInsuranceCustomer
  );
const vehicleInsuranceCustomerDiscount =
  insurancePremiumDiscountCalculator.calculatePremiumDiscountPercent(
    vehicleInsuranceCustomer
  );

console.log(
  `Discount applicable for Health insurance customer: ${healthInsuranceCustomerDiscount}%`
);
console.log(
  `Discount applicable for Vehicle insurance customer: ${vehicleInsuranceCustomerDiscount}%`
);
