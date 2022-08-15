import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup } from '@angular/forms';
import { FormControl } from '@angular/forms';
import { Validators } from '@angular/forms';
import {Product} from '../../model/Product';
import { ProductService } from '../../service/product.service';
import { Category } from 'src/app/model/Category';
@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.css']
})
export class CreateProductComponent implements OnInit {
  public createForm!: FormGroup;
  categorias: any[] | undefined;
  constructor(private router: Router, private service: ProductService) { 
    this.createForm = this.createFormGroup();
  }
  ngOnInit(): void {
    this.obtenerCategorias();
  }
  product: Product = new Product();
  createFormGroup() {
    return new FormGroup({
      nombre: new FormControl('', [Validators.required, Validators.minLength(4), Validators.maxLength(60)]),
      precio: new FormControl('', [Validators.required, Validators.min(1)]),
      stock: new FormControl('', [Validators.required, Validators.min(1)]),
      categoria: new FormControl('', [Validators.required]),
      descripcion: new FormControl('', [Validators.required, Validators.minLength(4), Validators.maxLength(800)]),
      image: new FormControl('', [Validators.required])
    });
  }

  obtenerCategorias(){
    this.service.getCategories()
      .subscribe(data => {
        this.categorias = data;
      })
  }

  guardarProducto(){
    if(this.createForm.valid){
      let categoria = {
        idCategoria: this.createForm.value.categoria
      }
      this.product.categoria = categoria;
      let srcImage = this.createForm.value.image;
      let originImage = srcImage.replace("C:\\fakepath\\", "");
      this.product.foto = originImage;
      this.service.createProduct(this.product).subscribe(
        data => {
          if (!data) {
             alert("Error al crear el producto");
          } else {
            alert("Producto creado");
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
  get image() { return this.createForm.get('image'); }

}


