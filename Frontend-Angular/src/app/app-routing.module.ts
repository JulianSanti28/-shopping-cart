import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateComponent } from './user/create/create.component';
import { LoginComponent } from './user/login/login.component';
import {AllListComponent} from './list/all-list/all-list.component';
import {CreateProductComponent} from './product/create-product/create-product.component';
import {AllProductComponent} from './product/all-product/all-product.component';
import {EditComponent} from './product/edit/edit.component';
const routes: Routes = [
  {path:'register', component: CreateComponent},
  {path:'login', component: LoginComponent},
  {path:'list/all', component: AllListComponent},
  {path:'product/create', component: CreateProductComponent},
  {path:'product/all', component: AllProductComponent},
  {path:'product/edit', component: EditComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
