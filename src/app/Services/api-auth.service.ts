import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiAuthService {

  private baseUrl = 'http://localhost:8080/'; // Reemplaza con la URL de tu servidor API

  constructor(private http: HttpClient) {}

  validarUsuario(username: string) {
    return this.http.get<boolean>(`${this.baseUrl}/validar-usuario/${username}`);
  }
}
