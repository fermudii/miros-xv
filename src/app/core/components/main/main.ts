import { Component } from '@angular/core';
import {Footer} from '../footer/footer';
import {Navbar} from '../navbar/navbar';
import {FlorLine} from '../../../shared/flor-line/flor-line';
import {PapelPicadoLine} from '../../../shared/papel-picado-line/papel-picado-line';
import {MainCover} from '../../../modules/main-cover/main-cover';
import {Welcome} from '../../../modules/welcome/welcome';
import {Itinerary} from '../../../modules/itinerary/itinerary';

@Component({
  selector: 'app-main',
  imports: [
    Footer,
    Navbar,
    FlorLine,
    PapelPicadoLine,
    MainCover,
    Welcome,
    Itinerary
  ],
  templateUrl: './main.html',
  styleUrl: './main.css',
})
export class Main {

}
