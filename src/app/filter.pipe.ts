import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(articles: any, term: any): any {
    if (term === undefined) 
      return articles;
    return articles.filter(article => article.title.toLowerCase().includes(term.toLowerCase()));
  }

}
