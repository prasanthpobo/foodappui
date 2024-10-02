export interface AboutUs {
      data :AboutUsData;
      services : Services[];
      our_team :OurTeam[]
}

export interface AboutUsData {
    image_url : string;
    description: Description[];
    images :Images[];
}

export interface Description {
    item : string;
}

export interface Images {
    image_url : string;
}

export interface Services {
    Image_url: string;
    Service_Name: string;
    Service_Details: string;
}

export interface OurTeam {
    Image_Url: string;
    Member_Name : string;
    post :string;
}