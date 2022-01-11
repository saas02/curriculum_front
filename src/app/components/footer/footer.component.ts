import { Component, OnInit, Input } from '@angular/core';
import { profile } from './../../interfaces/profile';



@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  @Input()
  profile:profile;
  
  constructor( 
    
  ) { 
    this.profile = {};
  }

  ngOnInit(): void {
  }

}
