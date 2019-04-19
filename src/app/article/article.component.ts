import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {Article} from '../models/Article';
import {ArticleService} from "../article.service";
import { ActivatedRoute, Router} from '@angular/router';

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

    constructor(private articleService: ArticleService, private route: ActivatedRoute, private router: Router){
    }

    delete(){
      this.deletedArticle.emit(this.article);
      this.router.navigateByUrl('/');
    }
   


  ngOnInit() {
    this.route.params.subscribe(params => {
      const id = params.id;
      this.articleService.getArticle(id).subscribe(it => {
        this.article = it;
      });
    });
  }

}
