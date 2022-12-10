import { Component, OnInit } from '@angular/core';
import { userInterface } from '../userInterface';
import { UserService } from '../user.service';

//importar a interface e o service

@Component({
  selector: 'app-user-table',
  templateUrl: './user-table.component.html',
  styleUrls: ['./user-table.component.css']
})
export class UserTableComponent implements OnInit {

  constructor(private userService: UserService) { }
  //inicializar o servico no construtor

  user?:userInterface[] | any;

  //variavel para armazenar a interface
  toDisplay = false;
  //variavel para abrir e fechar o card

  ngOnInit(): void {

    // inicializar o metodo no componente
  }


  showUsers(){
    this.toDisplay = !this.toDisplay;
    this.userService.getUser().subscribe(user => this.user = user)
    //metodo para mostrar os usuarios

  }


}
