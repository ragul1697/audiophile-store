import { CurrencyPipe } from '@angular/common';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'appCurrency',
  standalone: true
})
export class AppCurrencyPipe implements PipeTransform {
  readonly CODE = 'USD';
  readonly DISPLAY = '$ ';
  readonly DIGITS_INFO = '1.0-0';
  readonly _currencyPipe = new CurrencyPipe('en-US');

  transform(value: number): string {
    const output = this._currencyPipe.transform(
      value,
      this.CODE,
      this.DISPLAY,
      this.DIGITS_INFO,
    );

    if (output) return output;
    throw Error('Unexpected output');
  }
}
