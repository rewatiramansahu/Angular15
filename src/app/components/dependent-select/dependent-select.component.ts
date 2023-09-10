import { Component, OnInit } from '@angular/core';

interface Category {
  id: number;
  name: string;
  products: Product[];
}

interface Product {
  id: number;
  name: string;
}

@Component({
  selector: 'app-dependent-select',
  templateUrl: './dependent-select.component.html',
  styleUrls: ['./dependent-select.component.css']
})
export class DependentSelectComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  categories: Category[] = [
    {
      id: 1,
      name: 'Electronics',
      products: [
        { id: 1, name: 'Laptop' },
        { id: 2, name: 'Mobile' },
        // Add more products
      ]
    },
    {
      id: 2,
      name: 'Clothing',
      products: [
        { id: 3, name: 'Shirt' },
        { id: 4, name: 'Pants' },
        // Add more products
      ]
    },
    // Add more categories
  ];
  

  selectedCategory: Category | null = null;
  selectedProduct: Product | null = null;


  onCategoryChange() {
    if (this.selectedCategory) {
      const categoryId = this.selectedCategory.id;
      this.selectedProduct = null; // Reset the selected product when the category changes
      const products = this.getProductsByCategoryId(categoryId);
      // Do further processing with the products if needed
      console.log('Selected category products:', products);
    }
  }
  

  getProductsByCategoryId(categoryId: number): Product[] {
    const selectedCategory = this.categories.find(category => category.id === categoryId);
    if (selectedCategory) {
      return selectedCategory.products;
    }
    return [];
  }
  
  
  

}
