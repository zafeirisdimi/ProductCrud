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

  //constuctor
  constructor(private productService:ProductsService){

  }

  ngOnInit(): void {
    this.productService.getAllProducts()
    .subscribe( {
      next: (products) => {
        console.table(products)
        this.products = products;
      },
      error: (response) => {
        console.log(response)
      }
    })

  }

}
