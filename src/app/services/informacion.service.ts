import { Injectable } from '@angular/core';

import { profile } from '../interfaces/profile';

@Injectable()

export class InformacionService {
 
  profile:profile;

  constructor() {
    
    this.profile = 
      {
        name: "Sergio Alexander Amaya Serrato",
        age: 35,
        email: "saas02@gmail.com",
        phone: 3167259347,
        imageProfile: "https://scontent.fbog2-5.fna.fbcdn.net/v/t1.6435-1/p200x200/122322767_10157677222223715_763296051228191109_n.jpg?_nc_cat=102&ccb=1-5&_nc_sid=7206a8&_nc_eui2=AeGnu2BB-Rb7di0safXyua1pAvwsjHlxVVEC_CyMeXFVUcNatnuNB_lvpuk7nVbdcxk&_nc_ohc=-pgolwiU_BkAX_O8wto&_nc_ht=scontent.fbog2-5.fna&oh=00_AT-p-xy0GefYe0AX5TV9sm5pNVn8VtAHZnScElBysCRIXw&oe=61FCB873",
        profile:{
          name:"PHP Developer",
          timeExperience: 2011 
        }
      }
    ;
  }

}
