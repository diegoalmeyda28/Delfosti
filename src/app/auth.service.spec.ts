// src/app/auth.service.ts
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isAuthenticated(): boolean {
    // Implementa tu lógica de autenticación aquí
    return !!localStorage.getItem('user'); // Ejemplo simple
  }
}
