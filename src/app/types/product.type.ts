import { Includes } from "./includes.type";
import { Gallery } from "./gallery.type";
import { Image } from "./image.type";
import { OtherProduct } from "./other-product.type";
import { ProductCategory } from "./product-category.enum";

export type Product = {
  id: string;
  name: string;
  shortName: string;
  image: Image;
  category: ProductCategory;
  categoryImage: Image;
  isNew: boolean;
  price: number;
  description: string;
  features: string;
  includes: Includes[];
  gallery: Gallery;
  others: OtherProduct[];
};
