import { Component, OnInit, Input } from '@angular/core';
import { profile } from './../../interfaces/profile';
import { language } from './../../interfaces/languague';
import { InformacionService,  } from './../../services/informacion.service';
import { LanguageService } from './../../services/language.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html'
})
export class ProfileComponent implements OnInit {  
  
  @Input()
  profile:profile;
  language:language;

  downloadfile:boolean; 
  
  constructor( 
    private InformacionService:InformacionService,
    private languageService: LanguageService 
  ) {
    this.profile = {
      items: {}
    };
    this.downloadfile = false;
    this.language =  languageService.language;  
  }

  ngOnInit(): void {
    
  }  

  exportAsPDF( id:string ){  
    this.downloadfile = true;
    const buttonFile = window.document.getElementById("buttonFile");
    this.InformacionService.exportAsPDF( id, this.language.language ).subscribe(
      file => {
        let data = JSON.parse(JSON.stringify(file));
        let message = 'Download CV';
        if( data.url && !data.result.error ){
          window.open(this.InformacionService.endpointUrl+data.url, "_blank");
        }else if( data.result && data.result.error ){
          message = 'Occurió un error \n Intente de nuevo';
        }
        this.downloadfile = false;        
        if (buttonFile !== null) {
          buttonFile.innerText = message;
        }
        
      }, err => {
        console.log(err);
        this.downloadfile = false;
      }
    );;
  }

}
