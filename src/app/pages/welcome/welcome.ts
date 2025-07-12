import { Component } from '@angular/core';
import { Header } from '../../components/header/header';
import { Footer } from '../../components/footer/footer';

@Component({
  selector: 'app-welcome',
  imports: [Header, Footer],
  templateUrl: './welcome.html',
  styleUrl: './welcome.css',
})
export class Welcome {}
