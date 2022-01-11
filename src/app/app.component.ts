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
    this.profile = {};

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
