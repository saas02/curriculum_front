import { Component, OnInit, Input } from '@angular/core';
import { profile } from './../../interfaces/profile';
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
  
  constructor(private languageService: LanguageService) {
    this.profile = {
      items: {}
    };
  }

  ngOnInit(): void {
  }

  changeLang(language:string){
    this.languageService.toogleLanguage(language);    
  }

}
