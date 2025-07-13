import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { Component, inject, Inject } from '@angular/core';
import { NgbActiveOffcanvas, NgbOffcanvas } from '@ng-bootstrap/ng-bootstrap';
import { Usuario } from '../../models/usuario.model';

@Component({
  selector: 'ngbd-offcanvas-content',
  template: `
    <div class="offcanvas-header">
      <h2 class="offcanvas-title">Ford Motor Company</h2>

      <button
        type="button"
        class="btn-close text-reset"
        aria-label="Close"
        (click)="activeOffcanvas.dismiss('Cross click')"
      ></button>
    </div>
    <div class="offcanvas-body card d-flex flex-column gap-lg-5">
      <div class=" d-flex flex-column">
        <h5
          class="card-title d-flex justify-content-between align-items-center"
        >
          Usuário: <span class="text-primary"> {{ user.nome }}</span>
        </h5>
        <h5
          class="card-title d-flex justify-content-between align-items-center"
        >
          Email: <span class="text-primary">{{ user.email }}</span>
        </h5>
      </div>

      <div
        class=" d-flex flex-column gap-2 justify-content-center align-items-center "
      >
        <button
          class="btn btn-primary align-content-center justify-content-center d-flex gap-2"
          (click)="goToHome()"
        >
          <i class="bi bi-house"></i>
          <span>Home</span>
        </button>

        <button
          class="btn btn-primary align-content-center justify-content-center d-flex gap-2"
          (click)="goToDashboard()"
        >
          <i class="bi bi-speedometer2"></i>
          <span>Dashboard</span>
        </button>

        <button
          class=" btn-sair btn align-content-center justify-content-center d-flex gap-2"
          (click)="logout()"
          title="Sair"
        >
          <div>
            <i class="bi bi-door-closed"></i
            ><i class="bi bi-arrow-bar-right"></i>
          </div>

          <span>Logout</span>
        </button>
      </div>
    </div>
  `,
  styles: `
		/* Opening offcanvas as a component requires this style in order to scroll */
		:host {
			height: 100%;
			display: flex;
			flex-direction: column;
		}

    .btn{
      width: 100%;
      background-color: #1b357e;
    }

    .btn:hover{
      background-color: #1b357e;
      color: white;
    }

    .btn-sair{
     background-color: #a72d2dff;
     color: white;
    }

    .btn-sair:hover{
      background-color: #581717ff;
      color: white;
    }
	`,
})
export class NgbdOffcanvasContent {
  activeOffcanvas = inject(NgbActiveOffcanvas);
  user: Usuario = JSON.parse(localStorage.getItem('user') || '{}');

  constructor(
    private router: Router,
    @Inject(AuthService) private authService: AuthService
  ) {
    console.log('User from localStorage:', this.user);
  }

  goToDashboard() {
    this.router.navigate(['/dashboard']);
    this.activeOffcanvas.dismiss('Dashboard click');
  }
  goToHome() {
    this.router.navigate(['/welcome']);
    this.activeOffcanvas.dismiss('Dashboard click');
  }

  logout() {
    this.authService.logout();
    setTimeout(() => {
      this.router.navigate(['/login']);
      this.activeOffcanvas.dismiss('Logout click');
    }, 500);
  }
}

@Component({
  selector: 'ngbd-offcanvas-component',
  templateUrl: './offcanvas-component.html',
})
export class NgbdOffcanvasComponent {
  private offcanvasService = inject(NgbOffcanvas);

  open() {
    const offcanvasRef = this.offcanvasService.open(NgbdOffcanvasContent);
  }
}
