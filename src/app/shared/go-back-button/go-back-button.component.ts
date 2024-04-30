import { Location } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-go-back-button',
  standalone: true,
  imports: [],
  templateUrl: './go-back-button.component.html',
  styleUrl: './go-back-button.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class GoBackButtonComponent {
  constructor(private readonly _location: Location) { }

  goBack(): void {
    this._location.back();
  }
}
