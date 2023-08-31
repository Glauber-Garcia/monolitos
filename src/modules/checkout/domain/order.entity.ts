import AggregateRoot from "../../@shared/domain/entity/aggregate-root.interface";
import BaseEntity from "../../@shared/domain/entity/base.entity";
import Id from "../../@shared/domain/value-object/id.value-object";
import Client from "../../checkout/domain/cliente.entity";
import Product from "../../checkout/domain/product.entity";

type OrderProps = {
    id?: Id;
    client: Client;
    products: Product[];
    status?: string;
    invoiceId?: string;
}

export default class Order extends BaseEntity {

    private _client: Client;
    private _products: Product[];
    private _status?: string;
    private _invoiceId: string;

    constructor(props: OrderProps) {
        super(props.id);
        this._client = props.client;
        this._products = props.products;
        this._status = props.status || "pending";
        this._invoiceId = props.invoiceId || null;
    }

    approved(): void {
        this._status = "approved";
    }

    setInvoiceId(invoiceId: string) {
        this._invoiceId = invoiceId;
      }

    get client(): Client {
        return this._client;
    }
    get products(): Product[] {
        return this._products;
    }
    get status(): string {
        return this._status;
    }

    get invoiceId() {
        return this._invoiceId;
      }
    

    get total(): number {
        return this._products.reduce((total, product) => {
            return total + product.salesPrice;
        }, 0);
    }

}