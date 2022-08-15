import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from '../../service/product.service';
import { UserServiceService } from '../../service/user-service.service';
@Component({
  selector: 'app-all-product',
  templateUrl: './all-product.component.html',
  styleUrls: ['./all-product.component.css']
})
export class AllProductComponent implements OnInit {
  products: any[] | undefined;
  rol?: string;
  username?: string;
  cantidadProducto?: number = 1;

  basePath: string = "assets\\img\\";

  constructor(private router: Router, private service: ProductService, private userService: UserServiceService) {
  
  }

  ngOnInit(): void {
    this.cantidadProducto = 1;
    this.rol = localStorage.getItem('rol')!;
    this.username = localStorage.getItem('username')!;
    this.service.getProducts()
      .subscribe(data => {
        console.log(data);
        this.products = data;
      })
  }

  crearProducto() {
    this.router.navigate(['product/create']);
  }

  removeProduct(idProducto: String) {
    alert("Esta seguro que desea eliminar el producto?");
    this.service.removeProduct(idProducto).subscribe(
      data => {
        if (!data) {
          alert("Error al eliminar el producto");
        } else {
          alert("Producto eliminado");
          this.ngOnInit();
        }
      })
  }

  updateProduct(idProducto: string) {
    localStorage.setItem('idProducto', idProducto);
    this.router.navigate(['product/edit']);

  }

  aumentarCantidad(cantidadStock: number) {
    if (this.cantidadProducto! < cantidadStock) {
      this.cantidadProducto!++;
    }

  }

  disminuirCantidad() {
    if (this.cantidadProducto! > 1) {
      this.cantidadProducto!--;
    }
  }

  agregarCarrito(idProducto: string) {
    let producto = {
      idProducto: idProducto
    }
    let compra = {
      idCompra: localStorage.getItem('idCompra')!,
    }
    let body = {
      "producto": producto,
      "compra": compra,
      "cantidad": this.cantidadProducto
    };
    this.service.agregarCarrito(body).subscribe(
      data => {
        if (!data) {
          alert("Error al agregar el producto");
        } else {
          console.log(data);
          alert("Producto agregado");
          this.ngOnInit();
        }
      }
    )
  }







}
