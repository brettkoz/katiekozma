import { Component, OnInit } from '@angular/core';
import { Photo } from '../../models/Photo.model';
import { PortfolioService } from '../../services/portfolio.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  image1:boolean = true;
  image2:boolean = false;
  image3:boolean = false;
  iterator:number = 0;
  homePhotos:Photo[]=[
    
  ];
  constructor(private portfolioService:PortfolioService) { }

  ngOnInit() {
    this.animateBg();
    this.homePhotos = this.portfolioService.homePhotos;
  }
  animateBg(){
    setInterval(() => {
      if (this.iterator >= 2){
        this.iterator = 0;
      } else {
        this.iterator = this.iterator + 1;
      }
      switch (this.iterator){
        case 0:
          this.image2 = false;
          this.image3 = false;
          this.image1 = true;
          break;
        case 1:
          this.image1 = false;
          this.image3 = false;
          this.image2 = true;
          break;
        case 2:
          this.image3 = true;
          this.image1 = false;
          this.image2 = false;
         
          break;
      }
      console.log(this.iterator);
    },5000)
  }

}
