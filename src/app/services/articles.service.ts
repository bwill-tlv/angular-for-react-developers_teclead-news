import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { Article } from 'src/app/types/article';

@Injectable({
  providedIn: 'root',
})
export class ArticlesService {
  constructor(private http: HttpClient) {}

  getArticleIds = (): Observable<number[]> => {
    return this.http
      .get<number[]>('https://hacker-news.firebaseio.com/v0/topstories.json')
      .pipe(map((ids: number[]) => ids.slice(0, 10)));
  };

  getArticleById = (id: number): Observable<Article> => {
    return this.http.get<Article>(
      `https://hacker-news.firebaseio.com/v0/item/${id}.json?print=pretty`
    );
  };
}
