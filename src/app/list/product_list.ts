import { Component , AfterViewInit} from '@angular/core';
import { Product } from '../logic/product/Product'
import { ProductListItem } from './list-item/product_list_item'
import { ProductDisplay } from './product_display/product_display'
import {AngularFireDatabase, FirebaseListObservable} from 'angularfire2/database';

@Component({
  selector: 'prod-list',
  templateUrl: './product_list.html',
  styleUrls: ["./list.style.css"]
})
export class ProductList { 
  products: FirebaseListObservable<Product[]>;
  selectedProduct : Product
  constructor(db: AngularFireDatabase) {
    this.products = db.list('/products')
  }
  
  chosen = false;

  productName = "";
  productImg = "";
  productDescription;
  productPrice

  listItemClick(item : Product) {
    this.chosen = true;
    this.selectedProduct = item;
  }
}