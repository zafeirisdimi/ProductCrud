# ProductCrud
Simple Angular Application Crud 

## Table of Contents


## Fake Rest API
- We use the n
## Routing



## Models

- Product

## Services

### ProductService

- Includes all the required methods so that our application is suitable to communicate with the REST API of json-server.

### Methods of service
| Method | HTTP Request |  Description |
| --- | --- |  --- |
| `getAllProducts()` | **GET** | Returns the list of all products
| `getProductById(id:string)` | **GET**  | Returns the specific product with the specific id
| `addProduct(addProductRequest: Product)` | **POST** | Adds new product with new data {addProductRequest}
| `updateProduct(id:string,updateProductRequest:Product)` | **PUT**  | Updates the product with the specific id with the new data {updateProductRequest}
| `deleteProduct(id:string)` | **DELETE**  | Delete the specific product with the specific id from our database

- **Note:** 





## Components

### Add Product 

### Edit Product
### Products List

### Technologies 

- Visual Studio Code
- Angular 15
- Angular Routing
- Reactive Forms (ngForms)
- Bootstrap 5 (UI)
- json-server ()
- 
