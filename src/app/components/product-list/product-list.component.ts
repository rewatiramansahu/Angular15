import { Component, OnInit } from '@angular/core';
import * as data from './products.json';
import { ProductService } from './product.service';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products: any[] = [];
  currentPage: number = 1;
  pageSize: number = 10;

  constructor(private productService: ProductService) { }

  ngOnInit() {
    this.loadProducts(this.currentPage, this.pageSize);
  }

  loadProducts(page: number, pageSize: number) {
    this.productService.getProducts(page, pageSize)
      .subscribe(data => {
        this.products = data;
      });
  }

  previousPage() {
    if (this.currentPage > 1) {
      this.currentPage--;
      this.loadProducts(this.currentPage, this.pageSize);
    }
  }

  nextPage() {
    this.currentPage++;
    this.loadProducts(this.currentPage, this.pageSize);
  }


  myAlert()
  {
    Swal.fire('Good job!', 'You clicked the button!', 'success');
    Swal.fire( '','Added Successfully', 'success');
   
   // Swal.fire('Good job!', 'You clicked the button!', 'warning');
    //Swal.fire('Good job!', 'You clicked the button!', 'info');
    //Swal.fire('Good job!', 'You clicked the button!', 'error');
  }


}
