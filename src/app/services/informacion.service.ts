import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

import { map } from 'rxjs/operators';

@Injectable()

export class InformacionService {

  endpoint:string = "http://localhost:8001/api/usuarioscv";
 
  

  constructor( private http: HttpClient ) {    
    
  }  

  getUser(){
    
    return this.http.get(this.endpoint);

  }

  getJsonData(usuarios:object){
    let usuariosData = JSON.parse(JSON.stringify(usuarios));

    return (usuariosData.usuarios[0]) ? (usuariosData.usuarios[0]): {};
    
  }

  

}
