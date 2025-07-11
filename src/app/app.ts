import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Welcome } from './pages/welcome/welcome';
import { Header } from './componentes/header/header';
import { Footer } from './componentes/footer/footer';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Welcome, Header, Footer],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected title = 'ProjetoAngular';
}
