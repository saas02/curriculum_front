import { Component, OnInit, Input } from '@angular/core';
import { profile } from './../../interfaces/profile';
//import { language } from './../../interfaces/languague';
import { LanguageService } from './../../services/language.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html'
})
export class AboutComponent implements OnInit  {
  language:string
  @Input()
  profile:profile;
  //language:language;
  
  constructor( private languageService: LanguageService ) {    
    this.profile = {
      items: {}
    };
    
    this.language =  languageService.language.language;
  }

  ngOnInit(): void {
  }


}
