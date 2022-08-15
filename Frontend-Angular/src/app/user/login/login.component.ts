import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserServiceService } from 'src/app/service/user-service.service';
import { User } from 'src/app/model/User';
import { Login } from 'src/app/model/Login';
import { FormGroup } from '@angular/forms';
import { FormControl } from '@angular/forms';
import { Validators } from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public createForm!: FormGroup;
  constructor(private service: UserServiceService, private router: Router) {

    this.createForm = this.createFormGroup();
  }

  ngOnInit(): void {
  }
  createFormGroup() {
    return new FormGroup({
      username: new FormControl('', [Validators.required, Validators.minLength(4), Validators.maxLength(16)]),
      password: new FormControl('', [Validators.required, Validators.maxLength(15), Validators.minLength(8)]),
    });
  }

  user: User = new User();
  login: Login = new Login();
  validarUsuario() {
    if (this.createForm.valid) {
      this.service.loginUser(this.user)
        .subscribe(data => {
          if (data.token != null) {
            console.log(data);
            localStorage.setItem('token', data.token);
            localStorage.setItem('username', data.username);
            localStorage.setItem('rol', data.rol);
            localStorage.setItem('idCompra', data.idCarrito);
            alert("Bienvenido");
            this.router.navigate(['/product/all']);
          } else {
            alert("Datos incorrectos, " + ", ¡Registrate!");
            this.router.navigate(['/register']);
          }
        })
    } else {
      alert("Formulario invalido");
    }

  }
  get username() { return this.createForm.get('username'); }
  get password() { return this.createForm.get('password'); }
}
