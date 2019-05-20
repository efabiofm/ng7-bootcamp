import { Component } from '@angular/core';
import { IProduct } from './product';

@Component({
  selector: 'pm-products',
  templateUrl: './product-list.component.html'
})
export class ProductListComponent {
  private _listFilter: string = ''; // can only be accessed inside the component
  showImage: false;
  filteredProducts: IProduct[] = [];
  products: IProduct[] = [
    {
      id: '1',
      name: 'Frijoles',
      code: 'FRJ-001',
      price: 9.99,
      rating: 4.6,
      imgUrl: 'https://s3.amazonaws.com/finecooking.s3.tauntonclud.com/app/uploads/2017/04/24171745/ING-pink-beans-thumb1x1.jpg'
    },
    {
      id: '2',
      name: 'Lentejas',
      code: 'LNJ-001',
      price: 12.99,
      rating: 3.8,
      imgUrl: 'https://s3.amazonaws.com/finecooking.s3.tauntonclud.com/app/uploads/2017/04/24171745/ING-pink-beans-thumb1x1.jpg'
    }
  ];

  constructor() {
    this.filteredProducts = this.products;
  }

  // access to _listFilter from outside the component
  get listFilter(): string {
    return this._listFilter;
  }

  // bond to the filter input, triggered on changes
  set listFilter(value: string) {
    this._listFilter = value;
    this.filteredProducts = this.listFilter ? this.performFilter(this.listFilter) : this.products;
  }

  onNotify(e) {
    alert(e);
  }

  performFilter(filterBy: string): IProduct[] {
    return this.products.filter((product: IProduct) =>
      product.name.toLocaleLowerCase().indexOf(filterBy.toLocaleLowerCase()) !== -1);
  }
}