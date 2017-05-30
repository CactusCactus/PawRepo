import { Component, Input} from '@angular/core';
import { News } from '../../logic/News'
@Component({
  selector: 'news-el',
  templateUrl: './news_element.html',
  styleUrls: ["./news_element.css"]
})
export class NewsElement  {
    @Input() news: News;

}
