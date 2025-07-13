import { Routes } from '@angular/router';
import { Dashboard } from './components/dashboard/dashboard';
import { Login } from './pages/login/login';
import { Welcome } from './pages/welcome/welcome';
import { DashboardPage } from './pages/dashboard-page/dashboard-page';
import { AuthGuard } from './guards/auth-guard';

export const routes: Routes = [
  {
    path: 'login',
    component: Login,
  },
  {
    path: 'dashboard',
    component: DashboardPage,
    canActivate: [AuthGuard],
  },
  {
    path: 'welcome',
    component: Welcome,
    canActivate: [AuthGuard],
  },
];
