import { Injectable } from '@angular/core';
import { userInterface } from './userInterface';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  private userUrl= 'https://jsonplaceholder.typicode.com/users'


  getUser(): Observable<userInterface[]>{
    return this.http.get<userInterface[]>(this.userUrl)
    
  }
}
