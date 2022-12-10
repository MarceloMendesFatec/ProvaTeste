import { Injectable } from '@angular/core';
import { userInterface } from './userInterface';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

// importar modulo observable
//importar modulo HttpCLient

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }
  //inicializar o modulo HttpCLient no construtor

  private userUrl= 'https://jsonplaceholder.typicode.com/users'
  // Definir uma variavel para receber o endpoint

  getUser(): Observable<userInterface[]>{
    return this.http.get<userInterface[]>(this.userUrl)
    /* criacao de metodo assincrono
    para receber os dados da api por meio do
    metodo GET
    */


  }
}
