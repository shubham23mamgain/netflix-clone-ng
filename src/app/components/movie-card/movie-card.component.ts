import { Component, inject, Input } from '@angular/core';
import { Movie } from '../../types/movie';
import { tmdbConfig } from '../../constants/config';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-movie-card',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './movie-card.component.html',
  styleUrl: './movie-card.component.scss'
})
export class MovieCardComponent {
  @Input() movie!: Movie;

  tmdbConfig = tmdbConfig;

  router = inject(Router);

  selectMovie(id: number) {
    // alert(`Movie Clicked ${id}`);
    this.router.navigateByUrl(`/browse/${id}`);
  }

}
