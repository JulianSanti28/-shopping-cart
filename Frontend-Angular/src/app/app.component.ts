import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserServiceService } from './service/user-service.service';

@Component({
  //Tag HTML
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
//Atirbutos que se van a exportar y la página HTML de este
//Componente los usa
export class AppComponent{

  responseLogin: boolean = false;
  usuarioLogin?: string;
  pathImageCarrito: string = "./assets/img/carrito.jpg";
  constructor(private router: Router, private userService: UserServiceService) {
    if(localStorage.getItem('ingreso') == "true"){
      this.responseLogin = true;
      this.usuarioLogin = localStorage.getItem('username')!;
    }
    this.getResponseLogin();
  }

  
  /*Métodos*/
  getResponseLogin(){
    this.userService.getResponseLogin$().subscribe(data => {
      
      if(data.token != null){
        this.responseLogin = true;
        localStorage.setItem('ingreso', "true");
        this.usuarioLogin = data.username;
      }
    })
  }
  createUser() {
    this.router.navigate(['register']);
  }
  loginUser() {
    this.router.navigate(['login']);
  }
  viewList(){
    this.router.navigate(['list/all']);
  }

  viewProduct(){
    this.router.navigate(['product/all']);
  }

  viewStore(){
    this.router.navigate(['store/all']);
  }
  logoutUser() {  
    localStorage.removeItem('token');
    localStorage.removeItem('rol');
    localStorage.removeItem('username');
    localStorage.removeItem('idCompra');
    localStorage.removeItem('ingreso');
    this.responseLogin = false;
    this.router.navigate(['login']);
  }

}
