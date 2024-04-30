import { ChangeDetectionStrategy, Component, HostBinding } from '@angular/core';
import { RichNavigationComponent } from '../../shared/rich-navigation/rich-navigation.component';
import { ProductZX9Component } from './product-zx9/product-zx9.component';
import { ProductZX7Component } from './product-zx7/product-zx7.component';
import { ProductYX1Component } from './product-yx1/product-yx1.component';
import { AboutComponent } from '../../shared/about/about.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    RichNavigationComponent,
    ProductZX9Component,
    ProductZX7Component,
    ProductYX1Component,
    AboutComponent,
  ],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export default class HomePageComponent {
  @HostBinding('attr.role') role = 'main';
}
