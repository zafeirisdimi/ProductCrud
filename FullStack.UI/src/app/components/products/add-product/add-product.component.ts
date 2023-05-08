import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from 'src/app/models/product.model';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit{

  //properties

  addProductRequest : Product = {
    id: '',
    code: '',
    description: '',
    barcode: 0,
    retailPrice: 0,
    wholesalePrice: 0,
    discount: 0
  };
  IsAdded:boolean = false;

  // constructor
  constructor(private productsService: ProductsService,private router:Router){

  }

  //methods
  ngOnInit(): void {
  }

  // add Product calling the productService(data from form) and redirect to products view
  addProduct(){
    console.log(this.addProductRequest);
    this.productsService.addProduct(this.addProductRequest)
    .subscribe(
    {
      next: (product) =>{
        console.log(product)
        this.IsAdded = true;
        this.router.navigate(['products'])
      }
    }
    );

  }

}
