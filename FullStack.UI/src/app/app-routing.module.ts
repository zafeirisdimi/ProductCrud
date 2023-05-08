import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsListComponent } from './components/products/products-list/products-list.component';
import { AddProductComponent } from './components/products/add-product/add-product.component';
import { EditProductComponent } from './components/products/edit-product/edit-product.component';
import { AddProductReactiveComponent } from './components/products/add-product-reactive/add-product-reactive.component';



const routes: Routes = [
  {
    path: '',
    component: ProductsListComponent
  },
  {
    path: 'products',
    component: ProductsListComponent,
  },
  {
    path: 'products/add',
    component: AddProductComponent
  },
  {
    path: 'products/edit/:id',
    component: EditProductComponent
  },
  {
    path: 'products/addReactive',
    component: AddProductReactiveComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
