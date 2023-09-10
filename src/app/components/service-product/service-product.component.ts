import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-service-product',
  templateUrl: './service-product.component.html',
  styleUrls: ['./service-product.component.css']
})
export class ServiceProductComponent implements OnInit {

  products:any[]=[];
  isNew:boolean=true;
  selectedProduct:any={};
  id:number=0;
  name:string="";
  price:number=0;
  category:string="";


  constructor(private productService:ProductService) { }

  ngOnInit(): void {
    this.products= this.productService.getAllProducts();
  }

  addNewProduct()
  {
    this.selectedProduct={id:this.id, name:this.name, price:this.price, category:this.category};
    this.productService.addNewProduct(this.selectedProduct);
    Swal.fire('Saved!', 'Product has been saved.', 'success');

  }

  getProductById(pid:number)
  {
    this.selectedProduct=this.productService.getProductById(pid);
    this.isNew=false;

  }

  addNewButtonClicked()
  {
    this.isNew=true;
    this.selectedProduct={};
  }

  updateProduct(prod:any)
  {
         // creating new  copy of obje from old one
         const product: any = { ...prod};
         if (this.id) {
          product.id = this.id;
        }
          if (this.name) {
            product.name = this.name;
          }

          if (this.price) {
            product.price = this.price;
          }

          if (this.category) {
            product.category = this.category;
          }

    this.productService.updateProduct(product);
    Swal.fire('Updated!', 'Product has been updated.', 'success');

  }


  deleteProduct(pid: number): void {
    Swal.fire({
      title: 'Confirmation',
      text: 'Are you sure you want to delete this product ?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, delete it!',
      cancelButtonText: 'No, keep it'
    }).then((result) => {
      if (result.isConfirmed) {
        this.productService.deleteProduct(pid);
        Swal.fire('Deleted!', 'Product has been deleted.', 'success');
      }
    });
  }



}
