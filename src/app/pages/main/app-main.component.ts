import {Component} from '@angular/core';
import {AppCommonComponent} from '../../common/app-common.component';
import {Router} from '@angular/router';

@Component({
  selector: 'app-main',
  templateUrl: './app-main.component.html',
  styleUrls: ['./app-main.component.css']
})
export class AppMainComponent extends AppCommonComponent {
  constructor(router: Router) {
    super(router);
  }
}
