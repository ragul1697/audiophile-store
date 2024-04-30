import { Injectable } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { RouterStateSnapshot, TitleStrategy } from '@angular/router';

// Source: https://angular.io/guide/router#setting-the-page-title

@Injectable({
  providedIn: 'root'
})
export class TitleStrategyService extends TitleStrategy {
  readonly SUFFIX = ' | Audiophile';

  override updateTitle(snapshot: RouterStateSnapshot): void {
    const title = this.buildTitle(snapshot);

    if (title !== undefined)
      this._title.setTitle(title + this.SUFFIX);
  }

  constructor(private readonly _title: Title) {
    super();
  }
}
