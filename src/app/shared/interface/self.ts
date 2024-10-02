export interface Self {
    user: User [];
    address: Address[];
}

export interface User {
    label :string;
    value :string;
    icon: string;
}

export interface Data {
    user_name?: string;
    password?: string;
    email?: string
    phone_number?: string;
    label: string
}

export interface Address {
    first_name: string;
    last_name: string;
    city: string;
    country: string;
    title: string;
    address: string;
    phone_number: string;
    edit: boolean;
    class: string;
    zip: string;
    deliver: boolean;
}