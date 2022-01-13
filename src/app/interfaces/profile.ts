export interface profile{
    _id?:string;
    name?:string;
    age?:number;
    email?:string;
    phone?:number;
    aboutMe?:string;
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
      socialNetworks?:any
    },    
    state?:boolean
  }