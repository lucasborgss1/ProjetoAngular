import { Component } from '@angular/core';
import { NgbdOffcanvasComponent } from '../offcanvas-component/offcanvas-component';

@Component({
  selector: 'app-header',
  imports: [NgbdOffcanvasComponent],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {}
