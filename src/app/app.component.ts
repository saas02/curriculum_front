import { Component, Input } from '@angular/core';
import { profile } from './interfaces/profile';
import { InformacionService } from './services/informacion.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  {
  title = 'cvsergio';  
  load = false;
  @Input() 
  profile:profile;

  constructor( 
    private InformacionService:InformacionService
  ) {    
 
    
    this.load = true;
    this.profile = {
      items:{
        
      }
    };

    /*this.profile = {
      _id: "61d8bf5db5b5a31ea4c53571",
      name: "Sergio Amaya",
      age: 35,
      address: "Bogotá, Colombia",
      email: "saas02@gmail.com",
      phone: 3167259347,
      aboutMe: "asasda",
      url:"s.amaya.com",
      language: "Spanish",
      imageProfile: "https://scontent.fbog2-5.fna.fbcdn.net/v/t1.6435-1/p200x200/122322767_10157677222223715_763296051228191109_n.jpg?_nc_cat=102&ccb=1-5&_nc_sid=7206a8&_nc_eui2=AeGnu2BB-Rb7di0safXyua1pAvwsjHlxVVEC_CyMeXFVUcNatnuNB_lvpuk7nVbdcxk&_nc_ohc=-pgolwiU_BkAX_O8wto&_nc_ht=scontent.fbog2-5.fna&oh=00_AT-p-xy0GefYe0AX5TV9sm5pNVn8VtAHZnScElBysCRIXw&oe=61FCB873",
      items: {
        profile: {
          name: "PHP Developer",
          timeExperience: 2011
        },
        skills: [
          {
            name: "PHP",          
            experience: 2011,
            percentage: 95
          },
          {
            name: "Angular",          
            experience: 2020,
            percentage: 10
          },
          {
            name: "NodeJs",          
            experience: 2020,
            percentage: 20
          },
          {
            name: "SQL",          
            experience: 2011,
            percentage: 60
          },
        ],
        experiences: [
          {
            company: "PHP",
            position: "Dev",
            functions: "hacer mucho",
            start: "02-11-1985",
            end: "02-11-1986"
          },
          {
            company: "PHP2",
            position: "Dev2",
            functions: "hacer mucho 2",
            start: "02-11-1989",
            end: "02-11-1990"
          },
          {
            company: "PHP3",
            position: "Dev3",
            functions: "hacer mucho3",
            start: "02-11-1986",
            end: "02-11-1987"
          }
        ],
        educations: [
          {
            institution: "uninpahu",
            title: "Dev",  
            description: "asdasdasd",
            start: "02-11-1985",
            end: "02-11-1986"
          },
          {
            institution: "PHP",
            title: "Dev",  
            description: "asdasdasd",          
            start: "02-11-1985",
            end: "02-11-1986"
          },
          {
            institution: "PHP",
            title: "Dev",  
            description: "asdasdasd",          
            start: "02-11-1985",
            end: "02-11-1986"
          }
        ],
        socialNetworks:[
          {
            name:"facebook",
            url: 'https://www.facebook.com',
            status: true
          },
          {
            name:"twitter",
            url: 'https://www.twitter.com',
            status: true
          },
          {
            name:"google",
            url: 'https://www.google.com',
            status: true
          },
          {
            name:"instagram",
            url: 'https://www.instagram.com',
            status: true
          },
          {
            name:"linkedin",
            url: 'https://www.linkedin.com',
            status: true
          }
        ]          
      },
      "state": true
    };*/
    //console.log(this.profile.items?.skills);
    
    this.InformacionService.getUser().subscribe(
      usuarios => {
        this.profile = this.InformacionService.getJsonData(usuarios)
        this.load = false;
      }, err => {
        console.log(err);
      }
    );

    
  }  

}
