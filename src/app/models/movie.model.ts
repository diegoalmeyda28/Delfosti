export interface Movie {
  id: number; // O cualquier identificador único que utilices
  title: string;
  description: string;
  genre: string; // Si tienes múltiples géneros, considera usar un array de strings
  coordinates?: {
    latitude: number;
    longitude: number;
  }; // Si es necesario para el mapa
}
