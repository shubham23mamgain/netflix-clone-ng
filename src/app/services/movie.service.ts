import { HttpClient, HttpHeaders } from "@angular/common/http";
import { inject, Injectable } from "@angular/core";
import { tmdbConfig } from "../constants/config";

@Injectable({
    providedIn: 'root'
})
export class MovieService {

    httpService = inject(HttpClient);

    getPopularMovies() {
        const headers = this.getHeaders();
        return this.httpService.get("https://api.themoviedb.org/3/movie/popular", {
            headers
        })
    }

    getNowPlayingMovies() {
        const headers = this.getHeaders();
        return this.httpService.get("https://api.themoviedb.org/3/movie/now_playing", {
            headers
        })
    }

    getTopRatedMovies() {
        const headers = this.getHeaders();
        return this.httpService.get("https://api.themoviedb.org/3/movie/top_rated", {
            headers
        })
    }

    getUpcomingMovies() {
        const headers = this.getHeaders();
        return this.httpService.get("https://api.themoviedb.org/3/movie/upcoming", {
            headers
        })
    }

    getHeaders() {
        let headers = new HttpHeaders();
        headers = headers.append("accept", "application/json");
        headers = headers.append("Authorization", "Bearer " + tmdbConfig.access_token);
        return headers;
    }

    getMovieVideos(movieId: number) {

        const headers = this.getHeaders();
        return this.httpService.get(`https://api.themoviedb.org/3/movie/${movieId}/videos`, {
            headers: headers

        });
    }


    getMovieById(movieId: number) {
        const headers = this.getHeaders();
        return this.httpService.get(`https://api.themoviedb.org/3/movie/${movieId}`, {
            headers: headers
        });

    }
}