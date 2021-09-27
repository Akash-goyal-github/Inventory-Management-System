import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-get-product-by-category',
  templateUrl: './get-product-by-category.component.html',
  styleUrls: ['./get-product-by-category.component.css']
})
export class GetProductByCategoryComponent implements OnInit {

  productList:any;
  product:any;
  key:any="";
  headers = ["Id", "Product Name", "Product Description", "Category", "Units"];


  constructor(private productService: ProductService) { }


  ngOnInit(): void {
    
  }

  
  categoryForm=new FormGroup({
    
    category: new FormControl('',[Validators.required])
  })

  get category(){
    return this.categoryForm.get('category');
  }

  getProductByCategory(){

    this.key=this.categoryForm.value;

    this.productService.getAllProductsByCategory(this.key).subscribe(data => {
      this.productList = data;
    });

  }


}
