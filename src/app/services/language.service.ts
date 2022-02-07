import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { language } from './../interfaces/languague';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {
  
  language:language;
  constructor(private translateService: TranslateService) {
    this.language = {
      language: 'es'
    };
    this.setAppLanguague();
  }

  setAppLanguague(){
    this.translateService.setDefaultLang(this.language.language);
    this.translateService.use(this.language.language);
  }

  toogleLanguage(lang: string) {
    this.translateService.use(lang);
  }
}
