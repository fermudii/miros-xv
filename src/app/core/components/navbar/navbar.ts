import { Component } from '@angular/core';
import {MenuItem} from 'primeng/api';
import {scrollToElementById} from '../../../shared/constants';
import {Menubar} from 'primeng/menubar';

@Component({
  selector: 'app-navbar',
  imports: [
    Menubar
  ],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
})
export class Navbar {
  items: MenuItem[] | undefined;
  ngOnInit() {
    this.items = [
      {
        label: 'Inicio',
        command: () => scrollToElementById('inicio', -60)
      },
      {
        label: 'Itinerario',
        command: () => scrollToElementById('itinerario', -60)
      },
      {
        label: 'Lugar',
        command: () => scrollToElementById('lugar', -60)
      }
    ]
  }
}
