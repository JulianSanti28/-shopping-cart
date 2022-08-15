import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {FormsModule} from '@angular/forms'
import {HttpClientModule} from '@angular/common/http';
import { CreateComponent } from './user/create/create.component';
import { LoginComponent } from './user/login/login.component';
import {ReactiveFormsModule} from '@angular/forms';
import { AllListComponent } from './list/all-list/all-list.component';
import { CreateProductComponent } from './product/create-product/create-product.component';
import { AllProductComponent } from './product/all-product/all-product.component';
import { EditComponent } from './product/edit/edit.component';

@NgModule({
  declarations: [
    AppComponent, CreateComponent, LoginComponent, AllListComponent, CreateProductComponent, AllProductComponent, EditComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
    
  ],
  providers: [
  ],
  //Indica cómo se levanta nuestra app
  bootstrap: [AppComponent]
})
export class AppModule { }
