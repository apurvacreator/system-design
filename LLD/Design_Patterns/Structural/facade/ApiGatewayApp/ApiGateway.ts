import { OrderService } from "./OrderService";
import { PaymentService } from "./PaymentService";
import { UserService } from "./UserService";

export class ApiGateway {
  private orderService: OrderService;
  private userService: UserService;
  private paymentService: PaymentService;
  constructor() {
    this.orderService = new OrderService();
    this.userService = new UserService();
    this.paymentService = new PaymentService();
  }

  showOrderDetails(userId, orderId, paymentId) {
    this.orderService.getOrderDetails(orderId);
    this.userService.getUserDetails(userId);
    this.paymentService.processPayment(paymentId);
  }
}
