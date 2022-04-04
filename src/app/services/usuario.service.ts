import { Usuario } from './../models/usuario.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UsuarioService {
  private listaUsuarios: any[];
  private url = 'http://localhost:8080/api-calcme/usuarios';

  constructor(private http: HttpClient) {

    this.listaUsuarios = [];
  }
  get usuarios() {
    return this.listaUsuarios;
  }

  buscarDados() {
    return this.http.get<Usuario[]>(this.url);
  }

  cadastrar(usuario: Usuario) {
   return this.http.post<Usuario>(this.url, usuario)
  }
}
