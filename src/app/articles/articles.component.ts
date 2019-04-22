import { Component, OnInit } from '@angular/core';
import { Article, RawArticle } from '../models/Article';
import {ArticleService} from "../article.service";

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.css']
})
export class ArticlesComponent implements OnInit {

  protected articles : Article[];

  constructor(private articleService: ArticleService) {
  }
  
  delete(article: Article){
    this.articleService.deleteArticle(article).subscribe(_ => this.loadArticles());
  }

  create(article: RawArticle){
    this.articleService.createArticle(article).subscribe(_ => this.loadArticles());
  }

  loadArticles(){
    this.articleService.getArticles().subscribe(it =>{
      this.articles = it;
    });
  }

  ngOnInit() {
   this.loadArticles();
  }

}
