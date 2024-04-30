import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-product-zx7',
  standalone: true,
  imports: [
    RouterLink,
  ],
  templateUrl: './product-zx7.component.html',
  styleUrl: './product-zx7.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductZX7Component { }
