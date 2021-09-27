import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedServiceService {

  title:string="";
  content:string="";
  product:any;

  constructor() { }

  setdialogtitle(title:string){
    this.title=title;
  }

  setdialogcontent(content:string){
    this.content=content;

  }

  getdialogtitle(){
    return this.title;
  }
  getdialogcontent(){
    return this.content;

  }

  setProduct(product:any){
      this.product=product;
  }

  getProduct(){
    return this.product;
  }
}
