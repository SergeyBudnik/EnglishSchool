import {Component} from '@angular/core';
import {AppCommonComponent} from '../../common/app-common.component';
import {Router} from '@angular/router';

@Component({
  selector: 'app-prices',
  templateUrl: './app-prices.component.html',
  styleUrls: ['./app-prices.component.css']
})
export class AppPricesComponent extends AppCommonComponent {
  constructor(router: Router) {
    super(router);
  }
}
