export interface order {
    order: orderData[];
}

export interface orderData {
    image_url: string;
    brand: string;
    transaction_id: number;
    amount: string;
    address: string;
    restaurant_address: string;
    delivery_address: string;
    date: string;
    time: string;
    product: product[];
    totalPrice: number;

}

export interface product {
    title: string;
    qty: number;
    price: number;
    totalPrice: number;
}