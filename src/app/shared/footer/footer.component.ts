import { ChangeDetectionStrategy, Component } from '@angular/core';
import { NavigationComponent } from '../navigation/navigation.component';
import { SocialMediaComponent } from '../social-media/social-media.component';
import { SvgLogoComponent } from '../../svg/svg-logo.component';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [
    SvgLogoComponent,
    NavigationComponent,
    SocialMediaComponent,
  ],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FooterComponent {

}
