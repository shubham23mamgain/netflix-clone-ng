import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieService } from '../../services/movie.service';
import { tmdbConfig } from '../../constants/config';

@Component({
  selector: 'app-movie-details',
  standalone: true,
  imports: [],
  templateUrl: './movie-details.component.html',
  styleUrl: './movie-details.component.scss'
})
export class MovieDetailsComponent {

  activatedRoute = inject(ActivatedRoute);
  movieService = inject(MovieService);

  selectedMovie: any = {};

  tmdbConfig = tmdbConfig;

  constructor() {
    this.activatedRoute.params.subscribe((res: any) => {
      // debugger;

      this.getMovieDetails(res.id);
    });
  }

  getMovieDetails(id: number) {
    this.movieService.getMovieById(id).subscribe((res) => {
      console.log("Detailed Movie", res);
      this.selectedMovie = res;
    })
  }



}
