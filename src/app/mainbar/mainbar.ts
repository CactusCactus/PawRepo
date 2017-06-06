import { Component, ComponentFactoryResolver, ViewContainerRef, OnInit } from '@angular/core';
import { ProductList } from '../list/product_list'
import { NewsContainer } from '../news/news_container'
import { Product } from '../logic/product/product';

import { Register } from '../account/register/register'
@Component({
  selector: 'main-bar',
  templateUrl: './mainbar.html',
  styleUrls: ["./mainbar.style.css"]
})
export class MainBar implements OnInit {
  currentItem;
  email;
  name;
  user;

  cartProducts = new Array<Product[]>();

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
        ref.instance.productEE.subscribe(product => this.updateCart(product))
        ref.changeDetectorRef.detectChanges();
      }
    }
    clickedCart() {
      if(this.currentItem != "cart") {
        this.currentItem = "cart"
        const factory = this.componentFactoryResolver.resolveComponentFactory(ProductList);
        this.viewContainerRef.clear();
        const ref = this.viewContainerRef.createComponent(factory);
        ref.instance.cart = true;
        ref.instance.email = this.email;
        ref.instance.clearList();
        ref.instance.productssync = this.cartProducts;
        this.cartProducts = [];
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
        const factory = this.componentFactoryResolver.resolveComponentFactory(Register);
        this.viewContainerRef.clear();
        const ref = this.viewContainerRef.createComponent(factory);
        ref.instance.user.subscribe(auth => this.updateName(auth));
        ref.changeDetectorRef.detectChanges();
      }
    }
    updateName(auth) {
        this.email = auth.email;
        this.name = auth.displayName;
        this.user = auth;
    }
    updateCart(product) {
        this.cartProducts.push(product)
    }
 }
