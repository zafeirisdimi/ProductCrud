import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators} from '@angular/forms';
import { ProductsService } from './../../../services/products.service';
import { ActivatedRoute, Router} from '@angular/router'
@Component({
  selector: 'app-add-product-reactive',
  templateUrl: './add-product-reactive.component.html',
  styleUrls: ['./add-product-reactive.component.css']
})
export class AddProductReactiveComponent implements OnInit{

  //properties

  profileAddForm: FormGroup = new FormGroup({
    id: new FormControl({}),
    code: new FormControl({}),
    description: new FormControl(''),
    barcode: new FormControl(''),
    retailPrice: new FormControl(''),
    wholesalePrice: new FormControl(''),
    discount: new FormControl(''),
  });
    title: string = "Add New"
    msgClass = '';
    msgResult = '';
    editData : any;
    IsAdded: boolean = false;
    productId: any;
    responseData: any;


    //constructor
  constructor(private productService : ProductsService , private router:ActivatedRoute){
    this.productId = this.router.snapshot.paramMap.get('id' ); // we get the number id from activated router after click on edit button
    console.log(this.productId)                               // check if we get really the id for current product

    if(this.productId != null){
      this.UpdateForm(this.productId);
      this.title = "Edit";
    }
  }

  //methods
  ngOnInit(): void {
    this.profileAddForm = new FormGroup({
      id: new FormControl({value:'',disabled:true}),
      code: new FormControl("", Validators.compose([Validators.required,Validators.minLength(5),Validators.maxLength(150)])),
      description: new FormControl("", Validators.compose([Validators.required,Validators.minLength(5),Validators.maxLength(150)])),
      barcode: new FormControl("", Validators.compose([Validators.required,Validators.min(0),Validators.max(99999)])),
      retailPrice: new FormControl("", Validators.compose([Validators.required,Validators.min(0),Validators.max(1000)])),
      wholesalePrice: new FormControl("", Validators.compose([Validators.required,Validators.min(0),Validators.max(1000)])),
      discount: new FormControl("", Validators.compose([Validators.required,Validators.min(0),Validators.max(50)])),
    });
    this.IsAdded = false;


  }

  // submitProductData()
  submitProductData(){
    if(this.profileAddForm.valid){
      console.log("data from add form:",this.profileAddForm.value)
      this.productService.addProduct(this.profileAddForm.value).subscribe( result =>{
        console.log("result:",result)
        if(result!=null){
          this.responseData = result;
          if(this.responseData.message='added'){
            this.msgClass = "success";
            this.msgResult = "New Product added successfully";
            this.IsAdded = true;
            this.clearForm();
          }else if(this.responseData.message="added"){
            this.msgClass = "success";
            this.msgResult = "New Product added successfully";
          }else{
            this.msgClass = "danger"
            this.msgResult = "Failed"
          }

        }
      });
    }else{
      this.msgClass = "danger"
      this.msgResult = "Please enter valid data"
    }


  }

  clearForm(){
    this.profileAddForm = new FormGroup({
      id: new FormControl({}),
      code: new FormControl({}),
      description: new FormControl(''),
      barcode: new FormControl(''),
      retailPrice: new FormControl(''),
      wholesalePrice: new FormControl(''),
      discount: new FormControl(''),
    })
  }

  UpdateForm(id:any){
    this.productService.getProductById(id).subscribe(data =>{
      this.editData = data;
    });


    this.profileAddForm = new FormGroup({
      id: new FormControl(this.editData.id),
      code: new FormControl(this.editData.code),
      description: new FormControl(this.editData.description),
      barcode: new FormControl(this.editData.barcode),
      retailPrice: new FormControl(this.editData.retailPrice),
      wholesalePrice: new FormControl(this.editData.wholesalePrice),
      discount: new FormControl(this.editData.discount),
    })
  }

}
