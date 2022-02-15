import { Component, Input, HostListener } from '@angular/core';
import { profile } from './interfaces/profile';
import { language } from './interfaces/languague';
import { InformacionService } from './services/informacion.service';
import { LanguageService } from './services/language.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  {
  title = 'cvsergio'  
  load = false  
  mybutton:any  

  @Input() 
  profile:profile;
  language:language;  
  
  @HostListener('window:scroll', ['$event.target'])
  windowScroll(e:any) {
    this.mybutton  = document.getElementById("myBtn");    
    let scroll = e.scrollingElement.scrollTop;
    let limit = 600;
    this.languageService.changeScrollValue((scroll > limit) ? true : false)   
  }

  constructor( 
    private InformacionService:InformacionService,
    private languageService: LanguageService
  ) {     
    this.load = true;    
    this.profile = {
      items:{
        
      }
    };
    this.language = this.languageService.language
    languageService.setAppLanguague();
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
