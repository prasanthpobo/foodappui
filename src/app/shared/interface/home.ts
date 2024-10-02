
export interface home {
    deal?: number[];
    brand?: number[];
    topSection?: topSection;
    category: number[];
    popular_restaurants?: number[];
    featured_restaurants?: number[];
    nearby_restaurants?: number[];
    product?: number[];
}

export interface HomeData {
    deal: Data;
    brand: Data;
    topSection: topSection;
    category: number[];
    popular_restaurants: Data;
    featured_restaurants: Data;
    nearby_restaurants: Data;
    product: productData;
}

export interface productData {
    title: string;
    sub_title: string;
    id: number[]
}

export interface Data {
    id: number[]
}

export interface topSection {
    title: string;
    sub_title: string;
    button_text: string;
}

