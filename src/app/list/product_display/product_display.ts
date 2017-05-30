import { Component, Input  } from '@angular/core';
import { Product } from '../../logic/product/Product'

@Component({
  selector: 'prod-disp',
  templateUrl: './product_display.html',
  styleUrls: ["./product_display.css"]
})
export class ProductDisplay  { 
    @Input() product: Product;
}
