export interface product {
    product: productData[];
    wishlist: productData[];
}

export interface productData {
    id: number;
    image_url: string;
    isOffer: boolean;
    name: string;
    description: string;
    rating: string;
    type: string;
    price: string;
    country: string;
    distance: string;
    time: string;
    value: number;
    tag?: string;
    offer: offer;
    brand: string;
    coupon: string;
    slug: string;
    overView?: overView[];
}
export interface offer {
    title: string;
    offer: string;
}

export interface overView {
    id: number
    items: items[]
}

export interface items {
    id: number;
    title: string;
    data: data[]
}

export interface data {
    item: string;
}
