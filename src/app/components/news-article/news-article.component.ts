import { Component, Input } from '@angular/core';
import { Article } from 'src/app/types/article';
import { ArticlesService } from '../../services/articles.service';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  selector: 'app-news-article',
  templateUrl: './news-article.component.html',
  styleUrls: ['./news-article.component.css'],
  imports: [CommonModule],
})
export class NewsArticleComponent {
  @Input() articleId!: number;

  isLoading = false;
  article!: Article;

  constructor(private articlesService: ArticlesService) {}

  ngOnInit() {
    this.isLoading = true;
    this.articlesService.getArticleById(this.articleId).subscribe((article) => {
      this.article = article;
      this.isLoading = false;
    });
  }
}
