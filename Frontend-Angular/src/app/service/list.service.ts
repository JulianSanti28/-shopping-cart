import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Product} from '../model/Product';

@Injectable({
  providedIn: 'root'
})
export class ListService {

  constructor(private http: HttpClient) { }
  urlFindProducts = "http://localhost:8085/carrito/compraProducto/allProducts";
  urlRemoveProducts = "http://localhost:8085/carrito/compraProducto/delete";
  urlInfoCompra= "http://localhost:8085/carrito/compra";

  getProducts(idCarrito?: string) {
    console.log("Id Carrito: " + idCarrito);
    return this.http.get<Product[]>(this.urlFindProducts+"/"+idCarrito);
  }
  deleteProduct(idCompraProducto: string) {
    return this.http.delete(this.urlRemoveProducts+"/"+idCompraProducto);
  }

  obtenerInformacionCompra(idCompra: string){
    return this.http.get(this.urlInfoCompra+"/"+idCompra);
  }




}
