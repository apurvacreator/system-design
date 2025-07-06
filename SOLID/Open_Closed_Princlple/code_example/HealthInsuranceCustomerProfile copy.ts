import { CustomerProfile } from "./CustomerProfile";

export class HealthInsuranceCustomerProfile implements CustomerProfile {
    isLoyal(): boolean {
        return Math.random() < 0.5;
    }
}