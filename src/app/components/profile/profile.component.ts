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
  
  constructor( private InformacionService:InformacionService ) {
    this.profile = {
      items: {}
    }; 
  }

  ngOnInit(): void {
    
  }  

  exportAsPDF( id:string ){       
    this.InformacionService.exportAsPDF( id ).subscribe(
      file => {
        let data = JSON.parse(JSON.stringify(file));
        if(data.url){
          window.open(this.InformacionService.endpointUrl+data.url, "_blank");
        }
      }, err => {
        console.log(err);
      }
    );;
  }

}
