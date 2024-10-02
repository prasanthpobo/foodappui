export interface Blog {
    categories: CategoriesData[]
    recentPost: RecentPostData[]
    tags: TagsData[]
    blogDetails: BlogDetailsData[]
}

export interface CategoriesData {
    name: string;
    value: string;
}

export interface RecentPostData {
    imageUrl: string;
    user_name: string;
    date: string;
}

export interface TagsData {
    title: string;
}

export interface BlogDetailsData {
    id: number;
    image_url: string;
    title: string;
    sub_title: string;
    description: string;
    slug_url:string;
    date: string;
    content:Content[];
    comment :Comment[];
}

export interface Content{
     text:string;
}

export interface Comment {
    image_url: string;
    name: string;
    date: string;
    comment: string;
    replay: string;
}