import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Product } from '../models/product.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  baseApiUrl: string = "http://localhost:3000";
  constructor(private http: HttpClient) { }


  // products/ GET
  getAllProducts() : Observable<Product[]>{
    return this.http.get<Product[]>(this.baseApiUrl+ '/products')
  }

  // products/{id} GET
  getProductById(id:string): Observable<Product>{
    return this.http.get<Product>(this.baseApiUrl+ '/products/'+id)

  }

  // products/  POST
  addProduct(addProductRequest: Product): Observable<Product>{
    return this.http.post<Product>(this.baseApiUrl+ '/products', addProductRequest);
  }

  // products/{id} PUT
  updateProduct(id:string,updateProductRequest:Product): Observable<Product>{
    return this.http.put<Product>(this.baseApiUrl+ '/products/'+ id, updateProductRequest);
  }

  // products/{id} DELETE
  deleteProduct(id:string): Observable<Product>{
    return this.http.delete<Product>(this.baseApiUrl+ '/products/'+id)
  }
}
