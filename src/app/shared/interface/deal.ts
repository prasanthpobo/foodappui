export interface Deal {
    todaysDeal: DealData[];
    homeFiveTodaysDeal: DealData[];
}

export interface DealData {
    id: number;
    image_url: string;
    offer: string;
    coupon_code: string;    
}