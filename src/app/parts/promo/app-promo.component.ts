import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-promo',
  templateUrl: './app-promo.component.html',
  styleUrls: ['./app-promo.component.css']
})
export class AppPromoComponent {
  @Input() public minimalistic: boolean;
}
