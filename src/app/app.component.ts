import { Component, Input } from '@angular/core';
import { profile } from './interfaces/profile';
import { InformacionService } from './services/informacion.service';
import { LanguageService } from './services/language.service';


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
    private InformacionService:InformacionService,
    private languageService: LanguageService
  ) {     
    this.load = true;
    this.profile = {
      items:{
        
      }
    };    
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
