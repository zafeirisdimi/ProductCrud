import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule} from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductsListComponent } from './components/products/products-list/products-list.component';
import { AddProductComponent } from './components/products/add-product/add-product.component';
import { FormsModule } from '@angular/forms';
import { EditProductComponent } from './components/products/edit-product/edit-product.component';
import { AddProductReactiveComponent } from './components/products/add-product-reactive/add-product-reactive.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    ProductsListComponent,
    AddProductComponent,
    EditProductComponent,
    AddProductReactiveComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
