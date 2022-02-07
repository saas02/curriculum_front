import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { HttpClient, HttpClientModule } from '@angular/common/http'
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

import { AppComponent } from './app.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { AboutComponent } from './components/about/about.component';
import { SkillComponent } from './components/skill/skill.component';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { ExperienceComponent } from './components/experience/experience.component';
import { ReferenceComponent } from './components/reference/reference.component';
import { EducationComponent } from './components/education/education.component';
import { ContactComponent } from './components/contact/contact.component';
import { ProfileComponent } from './components/profile/profile.component';

import { InformacionService } from './services/informacion.service';
import { LanguageService } from './services/language.service';

import { NgxLoadingXConfig, POSITION, SPINNER, NgxLoadingXModule } from 'ngx-loading-x';

const ngxLoadingXConfig: NgxLoadingXConfig = {
  show: false,
  bgBlur: 2,
  bgOpacity: 5,
  bgLogoUrl: '',
  bgLogoUrlPosition: POSITION.topLeft,
  bgLogoUrlSize: 100,
  spinnerType: SPINNER.threeStrings,
  spinnerSize: 220,
  spinnerColor: 'white',
  spinnerPosition: POSITION.centerCenter,
}

export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, './../assets/i18n/', '.json');
}


@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    AboutComponent,
    SkillComponent,
    PortfolioComponent,
    ExperienceComponent,
    ReferenceComponent,
    EducationComponent,
    ContactComponent,
    ProfileComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    NgxLoadingXModule.forRoot(ngxLoadingXConfig),
    TranslateModule.forRoot( {
      loader:{
        provide: TranslateLoader,
        useFactory: createTranslateLoader,
        deps: [ HttpClient ]
      }
    })
  ],  
  providers: [
    InformacionService,
    LanguageService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
