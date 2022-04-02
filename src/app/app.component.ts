import { UsuarioService } from './services/usuario.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'project-calcme';
  ano = new Date().getFullYear();

  constructor(private service: UsuarioService) {}

}
