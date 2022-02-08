import { Injectable, Input } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { language } from './../interfaces/languague';

@Injectable()
export class LanguageService {
  
  lang:any;
  @Input()
  language:language;  
  constructor(private translateService: TranslateService) {
    
    this.lang = 'es';
    if(sessionStorage.getItem('language') && sessionStorage.getItem('language') !== null){
      this.lang = sessionStorage.getItem('language');
    }    
    
    this.language = {
      language: this.lang
    };
    this.setAppLanguague();
  }

  setAppLanguague(){
    this.translateService.setDefaultLang(this.language.language);
    this.translateService.use(this.language.language);
  }

  toogleLanguage(language: string) {
    sessionStorage.setItem('language', language);
    this.translateService.use(language);
  }
}
