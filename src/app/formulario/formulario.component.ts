import { Usuario } from './../models/usuario.model';
import { UsuarioService } from './../services/usuario.service';
import { Component, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css'],
})
export class FormularioComponent {

  @Output() aoEnviar = new EventEmitter<any>();

    nome = '';
    email = '';
    telefone = '';

    constructor(private service: UsuarioService, private router: Router) {}



  enviar() {
    const usuario: Usuario = { nome: this.nome, email: this.email, telefone: this.telefone }
    this.service.cadastrar(usuario).subscribe(() => {
      this.limpar();
      this.router.navigateByUrl('usuarios')
    },
    error => console.error(error));

  }

  limpar() {
      this.nome = '',
      this.email = '',
      this.telefone = ''
  }
}
