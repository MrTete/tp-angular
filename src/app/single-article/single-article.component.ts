import { Component,Input, OnInit } from '@angular/core';
import {Article} from '../models/Article';
import {ArticleService} from "../article.service";
import { ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-single-article',
  templateUrl: './single-article.component.html',
  styleUrls: ['./single-article.component.css']
})
export class SingleArticleComponent implements OnInit {

  @Input()
  protected article:Article;

  constructor(private articleService: ArticleService, private route: ActivatedRoute, private router: Router) { }

  delete(){
   this.articleService.deleteArticle(this.article).subscribe(_ => this.router.navigateByUrl('/'));
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
