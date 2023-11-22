import { CommonModule } from '@angular/common';
import { HttpResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './me.component.html',
  styleUrls: ['./me.component.css'],
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
})
export class MeComponent {
  imageUrl: string = '';
  message: string = '';
  constructor(private authService: AuthService) {}

  ngOnInit(): void {
    this.authService.me().subscribe((res: HttpResponse<any>) => {
      if (res.status === 200) {
        this.imageUrl = res.body.imageUrl;
        this.message = res.body.message;
      }
    });
  }
}
