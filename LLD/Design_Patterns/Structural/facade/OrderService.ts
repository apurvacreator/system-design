export class OrderService {
  getOrderDetails(orderId: string) {
    console.log(
      `Fetching order details for order: ${orderId}`
    );
  }
}
