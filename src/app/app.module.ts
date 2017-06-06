import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { Header } from './head/header'
import { ProductList } from './list/product_list'
import { MainBar } from './mainbar/mainbar'
import { ProductListItem } from './list/list-item/product_list_item'
import { ProductDisplay } from './list/product_display/product_display'
import { NewsContainer } from './news/news_container'
import { NewsElement} from './news/news_element/news_element'
import { Register } from './account/register/register'

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { environment } from '../environments/environment';

@NgModule({
  declarations: [
    Header, ProductList, MainBar, ProductListItem, NewsContainer, NewsElement, ProductDisplay, Register,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFireAuthModule

  ],
  entryComponents: [ProductList, NewsContainer, ProductDisplay, Register],
  providers: [],
  bootstrap: [Header, MainBar]
})
export class AppModule { }
