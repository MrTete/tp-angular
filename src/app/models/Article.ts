export class Article {
    title : string;
    content : string;
    authors:string;
    id:number;

    constructor(t, c, a, i){
        this.id = i;
        this.title = t;
        this.content = c;
        this.authors = a;
    }

}

export class RawArticle{
    title : string;
    content : string;
    authors:string;

    constructor(t, c, a){
        this.title = t;
        this.content = c;
        this.authors = a;
    }
}