import { Component, OnInit, Input, SimpleChanges } from '@angular/core';
import { profile } from './../../interfaces/profile';
import { language } from './../../interfaces/languague';
import { LanguageService } from './../../services/language.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.styles.css']
})

export class HeaderComponent implements OnInit {  

  languages = [
    {
      code: "es",
      name: "spanish"
    },
    {
      code: "en",
      name: "english"
    }
  ]
  
  @Input()
  profile:profile;
  language:language;

  constructor(private languageService: LanguageService) {    
    this.profile = {
      items: {}
    };
    this.language =  languageService.language;    
  }

  ngOnInit(): void {
  }

  changeLang(language:string){    
    this.language.language = language;    
    this.languageService.toogleLanguage(language);    
  }

}
