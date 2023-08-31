import Order from "../domain/order.entity";


export default interface CheckoutGateway{
    addOrder(order:Order):Promise<Order>;
    findOrder(id:string):Promise<Order | null>;
}