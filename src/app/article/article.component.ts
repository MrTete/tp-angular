import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {Article} from '../models/Article';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {

    @Input()
    protected article:Article;

     @Output()
     deletedArticle : EventEmitter<Article> = new EventEmitter();

    constructor(){
    }

    delete(){
      this.deletedArticle.emit(this.article);
    }
   


  ngOnInit() {
    
  }

}
