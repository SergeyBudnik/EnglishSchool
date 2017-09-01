import {Component} from '@angular/core';
import {Router} from '@angular/router';
import {AppCommonComponent} from '../../common/app-common.component';

@Component({
  selector: 'app-about',
  templateUrl: './app-about.component.html',
  styleUrls: ['./app-about.component.css']
})
export class AppAboutComponent extends AppCommonComponent {
  public constructor(router: Router) {
    super(router);
  }
}
