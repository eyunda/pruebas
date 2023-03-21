import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Persona } from '../Modelo/Persona';

@Injectable()
export class ServiceService {

  
  constructor(private http:HttpClient) { }

  Url='https://localhost:7198/api/Juego';

  getPreguntas(){
    return this.http.get<Persona[]>(this.Url+"/ObtenerPregunta");
  }
  createPersona(persona:Persona){
    return this.http.post<Persona>(this.Url+"/CrearParticipante", persona);
  }

}