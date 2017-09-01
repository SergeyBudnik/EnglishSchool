import {OnInit} from '@angular/core';
import {Router, NavigationEnd} from '@angular/router';

export abstract class AppCommonComponent implements OnInit {
  protected constructor(protected router: Router) {}

  ngOnInit() {
    this.router.events.subscribe((ev) => {
      if (ev instanceof NavigationEnd) {
        window.scrollTo(0, 0);
      }
    });
  }
}
