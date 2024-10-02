export interface faq {
    faq: faqData[];
}

export interface faqData {
    title: string;
    data: data[];
}
export interface data {
    item: string;
    title: string;
    data : subData[];
}

export interface subData{
    item: string;
}
