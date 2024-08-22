import { Component, OnInit } from '@angular/core';
import { MovieService } from '../services/movie.service';
import { Movie } from '../models/movie.model';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent implements OnInit {
  movies: Movie[] = [];
  filteredMovies: Movie[] = [];
  genres: string[] = [];

  filterCriteria = {
    name: '',
    description: '',
    genres: [] as string[]
  };

  constructor(private movieService: MovieService) {}

  ngOnInit(): void {
    this.movieService.getMovies().subscribe((movies: Movie[]) => {
      this.movies = movies;
      this.filteredMovies = movies;
      this.genres = this.getUniqueGenres(movies);
    });
  }

  getUniqueGenres(movies: Movie[]): string[] {
    const allGenres = movies.flatMap(movie => movie.genre.split(','));
    return [...new Set(allGenres.map(genre => genre.trim()))];
  }

  applyFilters(): void {
    this.filteredMovies = this.movies.filter(movie => {
      const matchesName = movie.title.toLowerCase().includes(this.filterCriteria.name.toLowerCase());
      const matchesDescription = movie.description.toLowerCase().includes(this.filterCriteria.description.toLowerCase());
      const matchesGenres = this.filterCriteria.genres.length === 0 || this.filterCriteria.genres.some(genre => movie.genre.toLowerCase().includes(genre.toLowerCase()));

      return matchesName && matchesDescription && matchesGenres;
    });
  }

  filterByName(name: string): void {
    this.filterCriteria.name = name;
    this.applyFilters();
  }

  filterByDescription(description: string): void {
    this.filterCriteria.description = description;
    this.applyFilters();
  }

  filterByGenre(options: HTMLOptionsCollection): void {
    this.filterCriteria.genres = Array.from(options)
      .filter(option => option.selected)
      .map(option => option.value);
    this.applyFilters();
  }
  
}
