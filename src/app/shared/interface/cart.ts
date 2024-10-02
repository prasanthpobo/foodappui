export interface cart {
    data: cartData[];
    sub_total: number;
    discount: number;
    discount_price: number;
    to_pay: number;
}

export interface cartData {
    id: number;
    title: string;
    sub_title: string;
    place: string;
    count: number;
    price: number;
    qty: number;
    totalPrice: number;
}