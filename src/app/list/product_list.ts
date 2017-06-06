import { Component , AfterViewInit, Injectable, Output, EventEmitter} from '@angular/core';
import { Product } from '../logic/product/Product'
import {Observable} from 'rxjs/Observable';
import { ProductListItem } from './list-item/product_list_item'
import { ProductDisplay } from './product_display/product_display'
import {AngularFireDatabase, FirebaseListObservable} from 'angularfire2/database';

@Component({
  selector: 'prod-list',
  templateUrl: './product_list.html',
  styleUrls: ["./list.style.css"]
})
@Injectable()
export class ProductList { 
  products: FirebaseListObservable<Product[]>;
  productssync;
  selectedProduct : Product
  cart : boolean;
  db : AngularFireDatabase;
  email : string;
  @Output() productEE = new EventEmitter<Product[]>();

  constructor(db: AngularFireDatabase) {
    this.db = db;
    if(!this.cart) {
      this.products = db.list('/products')
    } else {
    }
  }
  
  chosen = false;

  productName = "";
  productImg = "";
  productDescription;
  productPrice
  clearList () {
    this.products = null;
    var name = this.email.substr(0, this.email.indexOf('@'))
    name = name.split('.').join("");
    this.products = this.db.list("/users/" + name)

  }
  listItemClick(item : Product) {
    if(!this.cart) {
      this.chosen = true;
      this.selectedProduct = item;
    }
  }
  addProductToList(product) {
    this.productEE.emit(product)
  }
  saveClick() {
    if(this.email != undefined) {
      var name = this.email.substr(0, this.email.indexOf('@'))
      name = name.split('.').join("");
      var list = this.db.list("/users/" + name)
      this.productssync.forEach(element => {
           list.push(element);
      });
      this.productssync = null;
    }
  }
}