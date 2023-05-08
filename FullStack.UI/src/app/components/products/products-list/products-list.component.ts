import { Component,OnInit } from '@angular/core';
import { Product } from 'src/app/models/product.model';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css']
})
export class ProductsListComponent implements OnInit{

  //properties
  products: Product[] = [];

  //constructor
  constructor(private productService:ProductsService){
  }

  //methods
  //with initialization of component, we demand from productService the list of all products from dummy database
  ngOnInit(): void {
    this.productService.getAllProducts()
    .subscribe( {
      next: (products) => {
        console.table(products) // check in console if we get a table of objects type Product
        this.products = products;
      },
      error: (response) => {
        console.log(response)  // check in console the error in the response of request
      }
    })

  }

}
