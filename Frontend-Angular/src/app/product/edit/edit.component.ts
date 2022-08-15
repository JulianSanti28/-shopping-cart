import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup } from '@angular/forms';
import { FormControl } from '@angular/forms';
import { Validators } from '@angular/forms';
import {Product} from '../../model/Product';
import { ProductService } from '../../service/product.service';



@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  public createForm!: FormGroup;
  categorias: any[] | undefined;

  constructor(private router: Router, private service: ProductService) { 
    this.createForm = this.createFormGroup();
  }

  ngOnInit(): void {
    this.ontenerProducto();
    this.obtenerCategorias();
  }

  product: Product = new Product();
  createFormGroup() {
    return new FormGroup({
      nombre: new FormControl('', [Validators.required, Validators.minLength(4), Validators.maxLength(60)]),
      precio: new FormControl('', [Validators.required, Validators.min(1)]),
      stock: new FormControl('', [Validators.required, Validators.min(1)]),
      categoria: new FormControl('', [Validators.required]),
      descripcion: new FormControl('', [Validators.required, Validators.minLength(4), Validators.maxLength(800)])
    });
  }

  ontenerProducto(){
    this.service.getProduct(localStorage.getItem('idProducto')!).subscribe(
      data => {
        console.log(data)
        this.product = data;
        this.createForm.setValue({
          nombre: this.product.nombre,
          precio: this.product.precio,
          stock: this.product.cantidadStock,
          categoria: this.product.categoria?.idCategoria,
          descripcion: this.product.descripcion
        });
      }
    )
  }
  obtenerCategorias(){
    this.service.getCategories()
      .subscribe(data => {
        console.log(data)
        this.categorias = data;
      })
  }

  updateProduct(){
    if(this.createForm.valid){ 
      let categoria = {
        idCategoria: this.createForm.value.categoria
      }
      this.product.categoria = categoria;
      console.log(this.product)
      this.service.updateProduct(this.product).subscribe(
        data => {
          if (!data) {
             alert("Error al actualizar el producto");
          } else {
            alert("Producto actualizado");
            this.router.navigate(['/product/all']);
          }
        }
      )
    }else{
      alert("Complete todos los campos");
    }

  }

  get name() { return this.createForm.get('nombre'); }
  get precio() { return this.createForm.get('precio'); }
  get stock() { return this.createForm.get('stock'); }
  get categoria() { return this.createForm.get('categoria'); }
  get descripcion() { return this.createForm.get('descripcion'); }

}
