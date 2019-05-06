import { Component, OnInit } from '@angular/core';
import categoryData from '../services/categories.json';
import productData from '../services/products.json';
import { Router } from '@angular/router';
import { log } from 'util';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {
  Categories: any = categoryData;
  allProducts:any = productData;
  productId: number;
  selectedProduct:any;
  constructor() {

  console.log('====================================');
  console.log(this.Categories);
  console.log('====================================');
   }

  ngOnInit() {
   console.log('====================================');
  // console.log(this.allProducts.filter(p => p.prodid === 2));
   console.log('====================================');
  }

  getProductByCatecory(event){ console.log('===============iddd=====================');
  this.selectedProduct = this.allProducts.filter(p => p.prod_id === event.id);
  }

}
