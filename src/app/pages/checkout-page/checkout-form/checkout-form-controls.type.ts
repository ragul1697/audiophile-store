import { ValidatorFn } from "@angular/forms";

export type CheckoutFormControls = {
  name: FormGroupControl;
  email: FormGroupControl;
  phone: FormGroupControl;
  address: FormGroupControl;
  zip: FormGroupControl;
  city: FormGroupControl;
  country: FormGroupControl;
  paymentMethod: FormGroupControl;
  eMoneyNumber?: FormGroupControl;
  eMoneyPin?: FormGroupControl;
};

type FormGroupControl = string | [string, (ValidatorFn | ValidatorFn[])];
