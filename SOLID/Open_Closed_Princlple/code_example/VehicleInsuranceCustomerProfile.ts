import { CustomerProfile } from "./CustomerProfile";

export class VehicleInsuranceCustomerProfile implements CustomerProfile {
    isLoyal(): boolean {
        return Math.random() < 0.5;
    }
}