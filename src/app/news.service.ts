import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { News } from './news';

@Injectable()

export class NewsService {

private newNewsUrl = 'api/newNews'; // URL to web api
private headers = new Headers({'Content-Type': 'application/json'});

constructor(private http: Http) { }


  getnewNews(): Promise<News[]> {
    return this.http.get(this.newNewsUrl)
    .toPromise()
    .then(response => response.json().data as News[])
    .catch(this.handleError);
  }

  update(news: News): Promise<News> {
  const url = `${this.newNewsUrl}/${news.id}`;
  return this.http
    .put(url, JSON.stringify(news), {headers: this.headers})
    .toPromise()
    .then(() => news)
    .catch(this.handleError);
}

  private handleError(error: any): Promise<any> {
    console.error('An error occured', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }

  getNews(id: number): Promise<News>{
    const url = `${this.newNewsUrl}/${id}`;
    return this.http.get(url)
      .toPromise()
      .then(response => response.json().data as News)
      .catch(this.handleError);
  }

  create(name: string): Promise<News> {
  return this.http
    .post(this.newNewsUrl, JSON.stringify({name: name}), {headers: this.headers})
    .toPromise()
    .then(res => res.json().data as News)
    .catch(this.handleError);
}

delete(id: number): Promise<void> {
  const url = `${this.newNewsUrl}/${id}`;
  return this.http.delete(url, {headers: this.headers})
    .toPromise()
    .then(() => null)
    .catch(this.handleError);
}
}
