import { Component } from '@angular/core';
import { AppConstants } from './app.constant';

@Component({
  selector: 'exo-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'chartjstest';
  /** menu items */
  menuItems = Object.values(AppConstants);

}
