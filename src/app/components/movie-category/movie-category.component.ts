import { Component, Input } from '@angular/core';
import { MovieCardComponent } from "../movie-card/movie-card.component";
import { Movie } from '../../types/movie';

@Component({
  selector: 'app-movie-category',
  standalone: true,
  imports: [MovieCardComponent],
  templateUrl: './movie-category.component.html',
  styleUrl: './movie-category.component.scss'
})
export class MovieCategoryComponent {
  @Input() title = "";

  @Input() movieList: Movie[] = [];

}
