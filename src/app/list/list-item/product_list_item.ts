import { Component, Input  } from '@angular/core';
import { Product } from '../../logic/product/Product'

@Component({
  selector: 'prod-item',
  templateUrl: './product_list_item.html',
  styleUrls: ["./list.item.style.css"]
})
export class ProductListItem  { 
    @Input() product: Product;
}
