// src/app/auth.service.ts
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private isAuthenticatedStatus = false; // O tu lógica de autenticación

  constructor() {}

  isAuthenticated(): boolean {
    // Lógica de autenticación aquí
    return this.isAuthenticatedStatus;
  }

  login(): void {
    // Lógica para el login
    this.isAuthenticatedStatus = true;
  }

  logout(): void {
    // Lógica para el logout
    this.isAuthenticatedStatus = false;
  }
}
