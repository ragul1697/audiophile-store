import { TitleCasePipe } from '@angular/common';
import { inject } from '@angular/core';
import { ResolveFn } from '@angular/router';

export const productCategoryPageTitleResolver: ResolveFn<string> = (route, _state) => {
  const category = route.paramMap.get('category');

  if (category === null)
    throw Error('Category route parameter not found');

  return inject(TitleCasePipe).transform(category);
};
