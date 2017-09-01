import {Component} from '@angular/core';
import {Router} from '@angular/router';
import {AppCommonComponent} from '../../common/app-common.component';

@Component({
  selector: 'app-lessons',
  templateUrl: './app-lessons.component.html',
  styleUrls: ['./app-lessons.component.css']
})
export class AppLessonsComponent extends AppCommonComponent {
  public constructor(router: Router) {
    super(router);
  }

  public onPricesClick() {
    this.router.navigate(['/prices']);
  }
}
