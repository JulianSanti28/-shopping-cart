import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {ListService} from '../../service/list.service';

@Component({
  selector: 'app-all-list',
  templateUrl: './all-list.component.html',
  styleUrls: ['./all-list.component.css']
})
export class AllListComponent implements OnInit {
  products: any[] | undefined;
  basePath: string = "assets\\img\\";
  totalCompra: number = 0;
  infoCompra : any = undefined;
  fechaActual = new Date();
  constructor(private router : Router, private service : ListService ) { }

  ngOnInit(): void {
    this.getProducts();
    this.obtenerInformacionCompra(localStorage.getItem('idCompra')!);
  }
  eliminarProducto(idCompraProducto: string){
    this.service.deleteProduct(idCompraProducto).subscribe(
      data => {
        this.getProducts();
        this.obtenerInformacionCompra(localStorage.getItem('idCompra')!);
      }
    )

  }
  getProducts() {
    let idCarrito = localStorage.getItem('idCompra')!;
    this.service.getProducts(idCarrito).subscribe(
      data => {
        this.products = data;
      }
    )
  }

  obtenerInformacionCompra(idCompra: string){
    this.service.obtenerInformacionCompra(idCompra).subscribe(
      data => {
        if (!data) {
          alert("Error al obtener la informacion");
        } else {
          this.infoCompra = data;
          console.log(this.infoCompra);
          this.totalCompra = this.infoCompra.totalFinal;
        }
      }
    )
  }

}
