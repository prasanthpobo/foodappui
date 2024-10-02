export interface offer {
    AvailableCoupons: offerData[];
    BankOffers: offerData[];
}

export interface offerData {
    id?: number;
    image_url?: string;
    title?: string;
    sub_title?: string;
    type: string;
    offer: string;
    description?: string;
    condition: string;
    coupon_code: string;
}