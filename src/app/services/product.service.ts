import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor() { }
  private products:any[] = [
    {id:10001, name:'Vivo S1 Pro', price:24000, category:'Mobile'},
    {id:10002, name:'LG SMart TV', price:15000, category:'TV'},
    {id:10003, name:'Washing Machine', price:24000, category:'Electronics'},
    {id:10004, name:'Keyboard', price:450, category:'Computer'},
    {id:10005, name:'Mouse', price:500, category:'Computer'},
  ];

  getAllProducts()
  {
    return this.products;
  }

  addNewProduct(product:any)
  {
     this.products.push(product);
  }

  getProductById(pid:number)
  {
    return this.products.find(product=> product.id === pid);
  }

  updateProduct(prod:any)
  {
    const index = this.products.findIndex(product => product.id === prod.id);
    console.log(prod);
    var newproduct = {...this.products[index]};
    newproduct = prod;
    this.products[index] = newproduct;

  }


  deleteProduct(pid: number): void {
    const index = this.products.findIndex(prod => prod.id === pid);
    if (index !== -1) {
      this.products.splice(index, 1);
    }
  }

  


}
