import { Component, inject } from '@angular/core';
import { HeaderComponent } from "../../components/header/header.component";
import { MovieCategoryComponent } from "../../components/movie-category/movie-category.component";
import { MovieService } from '../../services/movie.service';
import { Movie } from '../../types/movie';
import { tmdbConfig } from '../../constants/config';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-browse',
  standalone: true,
  imports: [HeaderComponent, MovieCategoryComponent],
  templateUrl: './browse.component.html',
  styleUrl: './browse.component.scss'
})
export class BrowseComponent {

  movieService = inject(MovieService);
  popularMovies: Movie[] = [];
  topRatedMovie: Movie[] = [];
  upcomingMovie: Movie[] = [];
  nowPlayingMovie: Movie[] = [];

  public domSanitizer = inject(DomSanitizer);

  tmdbConfig = tmdbConfig;

  bannerMovie!: Movie;

  ngOnInit() {
    this.movieService.getPopularMovies().subscribe((result: any) => {

      this.popularMovies = result.results;
      // console.log("popular movies", this.popularMovies);
      this.bannerMovie = this.popularMovies[1];
      this.movieService.getMovieVideos(this.bannerMovie.id).subscribe((res: any) => {
        this.bannerMovie.videoKey = res.results.find((x: any) => x.type = 'Trailer').key
      })
    })

    this.movieService.getTopRatedMovies().subscribe((result: any) => {

      this.topRatedMovie = result.results;
    })

    this.movieService.getNowPlayingMovies().subscribe((result: any) => {

      this.nowPlayingMovie = result.results;
    })

    this.movieService.getUpcomingMovies().subscribe((result: any) => {

      this.upcomingMovie = result.results;
    })
  }

}
