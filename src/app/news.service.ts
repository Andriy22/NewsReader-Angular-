import { Injectable } from '@angular/core';

//мережа
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  apiKey = '22136393aeb145f4990e0b157a7f60ff';
  apiUrl = 'https://newsapi.org/v2/';
  constructor(private client: HttpClient) { }
  initSources() {
    return this.client.get(this.apiUrl + 'sources?language=en&apiKey=' + this.apiKey);
  }
  initArticles() {
    return this.client.get(this.apiUrl + 'top-headlines?sources=techcrunch&apiKey=' + this.apiKey);
  }
  initArticlesById(source: string) {
    return this.client.get(this.apiUrl + 'top-headlines?sources=' + source + '&apiKey=' + this.apiKey);
  }
}
