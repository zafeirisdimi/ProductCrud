import { Component,OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from 'src/app/models/product.model';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent implements OnInit{

  //properties
  productDetails : Product =  {
    id: '',
    code: '',
    description: '',
    barcode: 0,
    retailPrice: 0,
    wholesalePrice: 0,
    discount: 0
  };

  //constructor
  constructor(private route: ActivatedRoute, private productService:ProductsService, private router:Router){
  }

  //methods
  //on initialization of component, we take id from Route.paramMap and use id to retrieve the product with productSercive.

  ngOnInit(): void {
    this.route.paramMap.subscribe(
      {
      next: (params) =>
      {
        const id = params.get('id');
        if (id)
        {
          // call Api
          this.productService.getProductById(id).subscribe(
            {
            next: (response) =>
            {
              console.log("getProductById",response)
              this.productDetails = response;
            }
          });
        }
      }
    })
  }

  updateProduct(){
    this.productService.updateProduct(this.productDetails.id,this.productDetails)
    .subscribe({
      next: (response) =>{
        this.router.navigate(['products']);
      }
    });
  }

  deleteProduct(id:string){
    this.productService.deleteProduct(id).subscribe({
      next: (response) =>{
        this.router.navigate(['products']);
      }
    })
  }
}
