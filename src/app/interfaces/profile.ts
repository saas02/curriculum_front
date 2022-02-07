export interface profile{
    uid?:string;
    name?:string;
    age?:number;
    email?:string;
    phone?:number;
    about?:any;
    address?:string;
    language?:string;
    url?:string;
    imageProfile?:string;
    items: {
      profile?: {
        name:string;
        timeExperience:number;
      },
      skills?:any,
      experiences?:any
      educations?:any,
      portafolios?:any,
      socialNetworks?:any,
      references?:any
    },    
    state?:boolean
  }