import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { NewsArticleComponent } from 'src/app/components/news-article/news-article.component';
import { ArticlesService } from 'src/app/services/articles.service';

@Component({
  standalone: true,
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  imports: [CommonModule, NewsArticleComponent],
})
export class HomeComponent {
  articleIds: number[] = [];

  constructor(private articlesService: ArticlesService) {}

  ngOnInit() {
    this.articlesService.getArticleIds().subscribe((ids) => {
      this.articleIds = ids;
    });
  }
}
