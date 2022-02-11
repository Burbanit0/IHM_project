import { Product } from './product';

export class Order {
    constructor(
      public id?: string,
      public title?: string,
      public user_id?: string,
      public list_products?: Array<Product>,
    ){ }
}