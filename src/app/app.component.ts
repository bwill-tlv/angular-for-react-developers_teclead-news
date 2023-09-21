import { Component } from '@angular/core';
import { ArticlesService } from './services/articles.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  articleIds: number[] = [];

  constructor(private articlesService: ArticlesService) {}

  ngOnInit() {
    this.articlesService.getArticleIds().subscribe((ids) => {
      this.articleIds = ids;
    });
  }
}
