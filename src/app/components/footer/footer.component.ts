import { Component, OnInit, Input } from '@angular/core';
import { profile } from './../../interfaces/profile';


@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html'
})
export class FooterComponent implements OnInit {

  @Input()
  profile:profile;
  
  constructor( 
    
  ) { 
    this.profile = {
      items: {}
    };
  }

  ngOnInit(): void {
  }

}
