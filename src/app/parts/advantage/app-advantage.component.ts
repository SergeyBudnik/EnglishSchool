import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-advantage',
  templateUrl: './app-advantage.component.html',
  styleUrls: ['./app-advantage.component.css']
})
export class AppAdvantageComponent {
  @Input() public link: string;
  @Input() public image: string;
  @Input() public title: string;
  @Input() public description: string;
}
