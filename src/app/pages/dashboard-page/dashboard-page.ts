import { Component } from '@angular/core';
import { Dashboard } from '../../components/dashboard/dashboard';
import { Header } from '../../components/header/header';
import { Footer } from '../../components/footer/footer';

@Component({
  selector: 'app-dashboard-page',
  imports: [Dashboard, Header, Footer],
  templateUrl: './dashboard-page.html',
  styleUrl: './dashboard-page.css',
})
export class DashboardPage {}
