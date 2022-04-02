import { Router } from '@angular/router';
import { UsuarioService } from './../services/usuario.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit {

  usuarios: any[] = [];

  constructor(private service: UsuarioService, private router: Router) { }

  irRegistro() {
    this.router.navigateByUrl('registro')
  }

  ngOnInit() {
    this.service.buscarDados().subscribe((usuarios) => this.usuarios = usuarios);
  }

}
