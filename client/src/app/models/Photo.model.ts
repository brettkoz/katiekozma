export class Photo{
    url:string;
    title:string;
    altText:string;
    constructor(url:string,title:string,altText:string){
        this.url = url;
        this.title = title;
        this.altText = altText;
    }
}