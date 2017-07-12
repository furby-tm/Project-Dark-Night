import { Component } from '@angular/core';
import { NewsService } from './news.service';
import { News } from './news';
import { OnInit } from '@angular/core';
import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'home-detail',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit{

  newNews: News[] = [];
    detail = "News";

    constructor(private newsService: NewsService, private sanitizer: DomSanitizer){
        this.sanitizer = sanitizer;
      }

transform(style) {
  return this.sanitizer.bypassSecurityTrustStyle(style);
}

ngOnInit(): void {
  this.newsService.getnewNews().then(newNews => this.newNews = newNews);
}
}
