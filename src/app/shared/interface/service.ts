
export interface service {
    service: serviceData[]
    homeFour: serviceData[];
}

export interface serviceData {
    title: string;
    description?: string;
    svg: string;
}