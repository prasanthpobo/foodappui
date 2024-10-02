export interface review {
    review:reviewData[];
}

export interface reviewData{
    id: number;
    image_url: string;
    user_name: string;
    rating: boolean;
    upload_time: number;
    title: string;
    description: string;
}