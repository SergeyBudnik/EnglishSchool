import {Component} from '@angular/core';
import {AppCommonComponent} from '../../common/app-common.component';
import {Router} from '@angular/router';

@Component({
  selector: 'app-contacts',
  templateUrl: './app-contacts.component.html',
  styleUrls: ['./app-contacts.component.css']
})
export class AppContactsComponent extends AppCommonComponent {
  public constructor(router: Router) {
    super(router);
  }
}
