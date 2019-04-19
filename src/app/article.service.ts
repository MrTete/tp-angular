import { Injectable } from '@angular/core';
import {Article, RawArticle} from './models/Article';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable()
export class ArticleService {

  constructor(private http : HttpClient) {
  }

  public getArticles() : Observable<Article[]> {
    return this.http.get<Article[]>("http://localhost:3000/articles");
  }

  public getArticle(id){
    return this.http.get<Article>("http://localhost:3000/articles/" + id);
  }

  public deleteArticle(article: Article): Observable<Article[]>{
    return this.http.delete<Article[]>("http://localhost:3000/articles/" + article.id);
  } 

  public createArticle(article: RawArticle){
    return this.http.post("http://localhost:3000/articles/", article);
  }

}
