import { Component, ComponentFactoryResolver, ViewContainerRef, ViewChild } from '@angular/core';
import { NewsElement } from './news_element/news_element'
import {AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable} from 'angularfire2/database';
import { News } from '../logic/news'
import { ProductDisplay } from '../list/product_display/product_display';
import { Product } from '../logic/product/Product'
@Component({
  selector: 'news-cont',
  templateUrl: './news_container.html',
  styleUrls: ["./news_container.style.css"]
})
export class NewsContainer  {
  newsList: FirebaseListObservable<News[]>;
  db : AngularFireDatabase;
  product : FirebaseObjectObservable<Product>;

  @ViewChild('display_container', {read: ViewContainerRef}) container : ViewContainerRef;

  constructor(db: AngularFireDatabase, private componentFactoryResolver: ComponentFactoryResolver,
                private viewContainerRef: ViewContainerRef) {
    this.db = db;
    this.newsList = db.list('/news')
    console.log(this.newsList)
  }
  newsClick(news : News, event) {
        this.container.clear();
        this.product = this.db.object('/products/' + news.productId)
        if(news.productId != undefined) {
          const factory = this.componentFactoryResolver.resolveComponentFactory(ProductDisplay);
          
          const ref = this.container.createComponent(factory);
          this.product.subscribe(prod => ref.instance.product = prod);
          ref.changeDetectorRef.detectChanges();
        }
  }  

 }
