import { Component, OnInit, Output, EventEmitter  } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CodegenComponentFactoryResolver } from '@angular/core/src/linker/component_factory_resolver';
import {Article, RawArticle} from '../models/Article';
import {ArticleService} from "../article.service";
import {Router} from '@angular/router';

@Component({
  selector: 'app-article-creation',
  templateUrl: './article-creation.component.html',
  styleUrls: ['./article-creation.component.css']
})
export class ArticleCreationComponent implements OnInit {

  articleForm : FormGroup;

  constructor(private articleService: ArticleService, private fb: FormBuilder, private router: Router) {
    this.articleForm = this.fb.group({
      title: ['Fake Title', Validators.required ],
      content : ['', Validators.required ],
      authors : ['', Validators.required ],
    });
  }

  createArticle(){
    const formModel = this.articleForm.value;
    const newArticle = {
      title : formModel.title,
      content : formModel.content,
      authors : formModel.authors
    }
    this.articleService.createArticle(newArticle).subscribe(_ => this.router.navigateByUrl('/'));
  }

  ngOnInit() {
  }

}
