export interface Options {
    logo: Logo;
    general: General;
    footer: Footer;
}

export interface Logo {
    heder_logo: string, 
    footer_logo: string,
    favicon_logo: string
}

export interface General {
    mode: string;
    language_direction: string;
    top_to_tap: string;
}

export interface Footer {
    footer_news_latter: FooterNewsLatter;
    description: string;
    social_media: SocialMedia;
    company: CommonPages;
    account: CommonPages;
    useful_links: CommonPages;
    top_brands: CommonPages;
    copy_right_text: string;
    payment_gateway: string;
}

export interface FooterNewsLatter {
    title: string;
    status: boolean;
}

export interface SocialMedia {
    facebook: string;
    twitter: string;
    linkedin: string;
    instagram: string;
    youtube: string;
}

export interface CommonPages {
    title: string;
    page: Page[]
}

export interface Page {
    title: string;
    link: string;
}