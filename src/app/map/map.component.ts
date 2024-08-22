import { Component, OnInit } from '@angular/core';
import { MovieService } from '../services/movie.service'; // Asegúrate de que la ruta sea correcta

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {
  center: google.maps.LatLngLiteral = { lat: 24, lng: 12 }; // Coordenadas iniciales
  zoom = 4;
  locations: google.maps.LatLngLiteral[] = []; // Arreglo para almacenar ubicaciones de cines

  constructor(private movieService: MovieService) { }

  ngOnInit(): void {
    this.loadMovies();
  }

  loadMovies(): void {
    this.movieService.getMovies().subscribe(data => {
      // Suponiendo que los datos tienen una estructura donde cada película tiene coordenadas
      console.log(data);
      this.locations = data.map((movie: any) => ({
        lat: movie.latitude,  // Ajusta esto según la estructura de tus datos
        lng: movie.longitude  // Ajusta esto según la estructura de tus datos
      }));
    });
  }
}
