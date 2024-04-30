import { ChangeDetectionStrategy, Component, HostBinding } from '@angular/core';
import { GoBackButtonComponent } from '../../shared/go-back-button/go-back-button.component';
import { CheckoutFormComponent } from './checkout-form/checkout-form.component';
import { CheckoutSummaryComponent } from './checkout-summary/checkout-summary.component';

@Component({
  selector: 'app-checkout',
  standalone: true,
  imports: [
    GoBackButtonComponent,
    CheckoutFormComponent,
    CheckoutSummaryComponent,
  ],
  templateUrl: './checkout-page.component.html',
  styleUrl: './checkout-page.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export default class CheckoutPageComponent {
  @HostBinding('attr.role') role = 'main';
}
