import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-svg-checkmark',
  standalone: true,
  imports: [],
  template: `
    <svg width="64" height="64" viewBox="0 0 64 64" fill="none">
      <circle cx="32" cy="32" r="32"/>
      <path d="M20.7539 33.3329L27.5054 40.0844L43.3085 24.2813" stroke="white" stroke-width="4"/>
    </svg>
  `,
  styleUrl: './svg-checkmark.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SvgCheckmarkComponent {

}
