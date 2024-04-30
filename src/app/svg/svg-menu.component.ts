import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-svg-menu',
  standalone: true,
  imports: [],
  template: `
    <svg width="16" height="15" viewBox="0 0 16 15" fill="white" aria-hidden="true">
      <rect width="16" height="3"/>
      <rect y="6" width="16" height="3"/>
      <rect y="12" width="16" height="3"/>
    </svg>
  `,
  styles: `
    :host {
      display: block;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SvgMenuComponent {

}
