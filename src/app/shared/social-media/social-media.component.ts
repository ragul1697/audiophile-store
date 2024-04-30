import { ChangeDetectionStrategy, Component } from '@angular/core';
import { SvgFacebookComponent } from '../../svg/social-media/svg-facebook.component';
import { SvgXComponent } from '../../svg/social-media/svg-x.component';
import { SvgInstagramComponent } from '../../svg/social-media/svg-instagram.component';

@Component({
  selector: 'app-social-media',
  standalone: true,
  imports: [
    SvgFacebookComponent,
    SvgXComponent,
    SvgInstagramComponent,
  ],
  templateUrl: './social-media.component.html',
  styleUrl: './social-media.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SocialMediaComponent {

}
