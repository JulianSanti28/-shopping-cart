import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from '../model/Product';
import { Category } from '../model/Category';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  constructor(private http: HttpClient) { }
  urlPath = 'http://localhost:8085/carrito/producto';
  urlSave =  this.urlPath + '/create';
  urlFindAll = this.urlPath + '/all'
  urlFindCategory = 'http://localhost:8085/carrito/categoria/all';
  urlAgregarCarrito = "  http://localhost:8085/carrito/compraProducto/create";
  createProduct(product: Product) {
    console.log("entro al servicio");
    console.log(product);
    return this.http.post<any>(this.urlSave, product);
  }

  removeProduct(idProducto: String) {
    return this.http.delete<any>(this.urlPath + '/delete/' + idProducto);
  }
  getProducts() {
    return this.http.get<Product[]>(this.urlFindAll);
  }
  getCategories() {
    return this.http.get<Category[]>(this.urlFindCategory);
  }
  getProduct(idProducto: String) {
    return this.http.get<Product>(this.urlPath + '/' + idProducto);
  }

  updateProduct(product: Product) {
    return this.http.put<any>(this.urlPath + '/update', product);
  }

  agregarCarrito(body: any) {
    return this.http.post<any>(this.urlAgregarCarrito, body);
  }





}
