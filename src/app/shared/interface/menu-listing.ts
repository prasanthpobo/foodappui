export interface menuListing {
    menuListing: menuListingList[]
}

export interface menuListingList {
    id: number;
    title: string;
    children: children[];
}

export interface children {
    title: string;
    id: number;
    image_url: string;
    description: string;
    price: string;
    offer_price: string;
    rating : number;
    mealType: string;
    customized?: boolean;
}

