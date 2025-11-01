import { Component } from '@angular/core';
import {scrollToElementById} from '../../../shared/constants';

@Component({
  selector: 'app-footer',
  imports: [],
  templateUrl: './footer.html',
  styleUrl: './footer.css',
})
export class Footer {
  scrollTo(id: string, event: Event) {
    event.preventDefault();
    scrollToElementById(id, -60);
  }
}
