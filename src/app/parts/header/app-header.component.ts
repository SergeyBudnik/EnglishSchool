import {Component, Input} from '@angular/core';

type Tab = 'MAIN' | 'LESSONS' | 'PRICES' | 'CONTACTS' | 'ABOUT';

@Component({
  selector: 'app-header',
  templateUrl: './app-header.component.html',
  styleUrls: ['./app-header.component.css']
})
export class AppHeaderComponent {
  @Input() public tab: Tab;
}
