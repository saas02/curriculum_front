import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

import { map } from 'rxjs/operators';

import jspdf from 'jspdf';
import html2canvas from 'html2canvas';

@Injectable()

export class InformacionService {
  
  endpointUrl:string = "https://pruebanodejs.amarreyamores.com.co"
  endpoint:string = this.endpointUrl+"/api/usuarioscv";  
  endpointPDF:string = this.endpointUrl+"/api/usuarioscv/doc/";

  constructor( private http: HttpClient ) {    
    
  }

  getUser(){    
    return this.http.get(this.endpoint);
  }

  getJsonData(usuarios:object){
    let usuariosData = JSON.parse(JSON.stringify(usuarios));

    return (usuariosData.usuarios[0]) ? (usuariosData.usuarios[0]): {};
    
  }

  getOrderBySkills( data:any ){
    
    if(data.items.skills.length > 0){
      data.items.skills.sort((a:any, b:any)=> {
        if (a.percentage > b.percentage) return -1;
        else if (a.percentage < b.percentage) return 1;
        else return 0;      
      })
    }    

    return data;
  }

  getOrderByExperiences( data:any ){
    if(data.items.experiences.length > 0){
      data.items.experiences.sort((a:any, b:any)=> {
        if (a.order < b.order) return -1;
        else if (a.order > b.order) return 1;
        else return 0;      
      })
    }    

    return data;
  }

  getOrderByEducations( data:any ){

    if(data.items.educations.length > 0){
      data.items.educations.sort((a:any, b:any)=> {        
        if (a.order < b.order) return -1;
        else if (a.order > b.order) return 1;
        else return 0;    
      })
    }    

    return data;
  }

  exportAsPDF( id:string ){       
    return this.http.put(this.endpointPDF+id, {} )
  }

}
