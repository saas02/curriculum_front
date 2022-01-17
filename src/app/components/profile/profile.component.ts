import { Component, OnInit, Input } from '@angular/core';
import { profile } from './../../interfaces/profile';
import { InformacionService,  } from './../../services/informacion.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html'
})
export class ProfileComponent implements OnInit {  
  
  @Input()
  profile:profile;

  downloadfile:boolean; 
  
  constructor( private InformacionService:InformacionService ) {
    this.profile = {
      items: {}
    };
    this.downloadfile = false;
  }

  ngOnInit(): void {
    
  }  

  exportAsPDF( id:string ){  
    this.downloadfile = true;
    const buttonFile = window.document.getElementById("buttonFile");
    this.InformacionService.exportAsPDF( id ).subscribe(
      file => {
        let data = JSON.parse(JSON.stringify(file));
        let message = 'Download CV';
        if( data.url && !data.result.error ){
          window.open(this.InformacionService.endpointUrl+data.url, "_blank");
        }else if( data.result.error ){
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
