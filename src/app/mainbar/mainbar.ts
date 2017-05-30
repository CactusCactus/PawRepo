import { Component, ComponentFactoryResolver, ViewContainerRef, OnInit } from '@angular/core';
import { ProductList } from '../list/product_list'
import { NewsContainer } from '../news/news_container'
import { Account } from '../account/account'
@Component({
  selector: 'main-bar',
  templateUrl: './mainbar.html',
  styleUrls: ["./mainbar.style.css"]
})
export class MainBar implements OnInit {
  currentItem;
  constructor(private componentFactoryResolver: ComponentFactoryResolver,
                private viewContainerRef: ViewContainerRef) {
    }
    ngOnInit() {
      this.clickedHome();
    }
    clickedShop() {
      if(this.currentItem != "shop") {
        this.currentItem = "shop"
        const factory = this.componentFactoryResolver.resolveComponentFactory(ProductList);
        this.viewContainerRef.clear();
        const ref = this.viewContainerRef.createComponent(factory);
        ref.changeDetectorRef.detectChanges();
      }
    }
    clickedHome() {
      if(this.currentItem != "home") {
        this.currentItem = "home"
        const factory = this.componentFactoryResolver.resolveComponentFactory(NewsContainer);
        this.viewContainerRef.clear();
        const ref = this.viewContainerRef.createComponent(factory);
        ref.changeDetectorRef.detectChanges();
      }
    }
    clickedAccount() {
      if(this.currentItem != "acc") {
        this.currentItem = "acc"
        const factory = this.componentFactoryResolver.resolveComponentFactory(Account);
        this.viewContainerRef.clear();
        const ref = this.viewContainerRef.createComponent(factory);
        ref.changeDetectorRef.detectChanges();
      }
    }
 }
