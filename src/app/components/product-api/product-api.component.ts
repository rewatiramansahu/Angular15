import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-product-api',
  templateUrl: './product-api.component.html',
  styleUrls: ['./product-api.component.css']
})
export class ProductApiComponent implements OnInit {

  products:any=[];
  constructor(private http:HttpClient) { }

  ngOnInit(): void {
    const url="https://fakestoreapi.com/products";
     this.http.get(url).subscribe(response=>{
        this.products=response;
        console.log(response);
     });
 
  }

}
