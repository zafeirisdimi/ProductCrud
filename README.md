# ProductCrud
Simple Angular Application Crud 

## Table of Contents

* [Brief](#brief)
  * [Fake Rest API](#fake-rest-api)
  * [Routing](#routing)
  * [Models](#models)
    + [Product](#product)
  * [Services](#services)
    + [ProductService](#productservice)
    + [Methods of service](#methods-of-service)
  * [Components](#components)
    + [Add Product](#add-product)
    + [Add Product v2](#add-product-v2)
    + [Edit Product](#edit-product)
    + [Products List](#products-list)
  * [Technologies](#technologies)

## Brief

<details><summary><h5>Overview</h5></summary>
<p>In this assignment, you will be creating a simple CRUD (Create, Read, Update, Delete) application
using Angular 14 and implement a dummy RESTful API. The application should allow users to
perform CRUD operations on a simple resource, such as a list of entities. Each entity should have the
following attributes: "name" and "type". The application should communicate with the RESTful API
to retrieve and update data.</p>
</details>
<details><summary><h5>Requirements</h5></summary>
<p>
<ul>
    <li>Angular 14+</li>
    <li>TypeScript</li>
    <li>HTML/CSS</li>
    <li>RESTful API</li>
    <li>JSON-Server</li>
</ul> </p>
</details>
<details><summary><h5>Task</h5></summary>
<p></p>
</details>
<details><summary><h5>Deliverables</h5></summary>
<p>
<ul>
<li>The source code of the application</li>
<li>The configuration files for the dummy RESTful API</li>
</ul>
</p>
</details>
<details><summary><h5>Evaluation Criteria</h5></summary>
<p>
<ul>
<li>Adherence to the requirements</li>
<li>Code quality</li>
<li>Proper usage of Angular 14</li>
<li>Proper usage of TypeScript</li>
<li>Proper usage of HTML/CSS</li>
<li>Proper usage of RESTful API</li>
<li>Proper usage of Reactive Form</li>
<li>basic validation</li>

</ul>
</p>
</details>
<details><summary>Submission</summary>
<p></p>
</details>

## Fake Rest API

- We use the npm library [json-server](https://www.npmjs.com/package/@types/json-server) to create a Fake REST API and establish the CRUD functions of our entity

- Installation: `npm i json-server` in app folder terminal
- After installation, create a `db.json` file with dummy data.
- Running: `json-server --watch db.json`

## Models

### Product 

| Type | Property | 
| --- | --- |
| string | id |
| string | code |
| string | description |
| number | barcode |
| number | retailPrice |
| number | wholesalePrice |
| number | discount |

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


## Components

- Add Product 
- Add Product v2
- Edit Product
- Products List

## Technologies 

- HTML/CSS
- Typescript
- Angular 15
- Angular Routing
- Reactive Forms (ngForms)
- Bootstrap 5 (UI)
- json-server
- Visual Studio Code
- Postman
