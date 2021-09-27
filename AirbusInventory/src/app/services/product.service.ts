import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from '../Product';
import { SharedServiceService } from './shared-service.service';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private httpClient: HttpClient, private sharedServiceService:SharedServiceService) { }


  getAllProducts(): Observable<any> {
    
    return this.httpClient.get<any>('http://localhost:8080/airbusManagement/getAllProducts',{
      headers:new HttpHeaders(
        {
          'Authorization' : `Bearer ${localStorage.getItem('token')}`
        }
      )
    });
  }

  addProduct(product:Product): Observable<any>{
    return this.httpClient.post<any>('http://localhost:8080/airbusManagement/addProduct',product,{
      headers:new HttpHeaders(
        {
          'Authorization' : `Bearer ${localStorage.getItem('token')}`
        }
      )
    });
  }

  getAllProductsByCategory(category: any): Observable<any> {
    return this.httpClient.get<any>(`http://localhost:8080/airbusManagement/getProductsByCategory/${category['category']}`,{
      headers:new HttpHeaders(
        {
          'Authorization' : `Bearer ${localStorage.getItem('token')}`
        }
      )
    });
  }

  deleteProduct(productId: any): Observable<any> {
    return this.httpClient.delete<any>(`http://localhost:8080/airbusManagement/deleteProduct/${productId}`,{
      headers:new HttpHeaders(
        {
          'Authorization' : `Bearer ${localStorage.getItem('token')}`
        }
      )
    });
  }

  updateProduct(product:Product,productId: any): Observable<any>{
    return this.httpClient.post<any>(`http://localhost:8080/airbusManagement/updateProduct/${productId}`,product,{
      headers:new HttpHeaders(
        {
          'Authorization' : `Bearer ${localStorage.getItem('token')}`
        }
      )
    });
  }

}
