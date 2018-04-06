export class Photo{
    url:string;
    date:string;
    caption:string;
    constructor(url:string,date:string,caption:string){
        this.url = url;
        this.date = date;
        this.caption = caption;
    }
}