export interface Brand{
    brand: BrandData[]
}
export interface BrandData {
    id: number;
    name: string;
    url: string;
    image_url: string;
    alt: string;
}