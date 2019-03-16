import {Component, OnDestroy, OnInit} from '@angular/core';
import {ProductsService} from '../services/products.service';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-divine-home',
  templateUrl: './divine-home.component.html',
  styleUrls: ['./divine-home.component.css']
})
export class DivineHomeComponent implements OnInit, OnDestroy {

  private subscriptions: Subscription[] = [];
  private products: any[] = [];
  private randomProducts: any[] = [];
  private selectedCategoryId = -1;
  private categories: any[] = [];

  constructor(private productsService: ProductsService) {

  }

  ngOnInit() {
    this.categories.push({id: 4});
    this.subscriptions.push(this.productsService.getAllCategories().subscribe(categories => {
      this.categories = categories;
      console.log(this.categories);

      this.categories.forEach(c => {
        if (c.products.length > 0) {
          this.randomProducts.push(...c.products.slice(0, 3));
        }
      });

      this.shuffle(this.randomProducts);
      this.products = this.randomProducts;
    }));
  }

  selectCategory(c) {
    this.selectedCategoryId = c.id;
    this.products = c.products;
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach(s => s.unsubscribe());
  }

  shuffle(array: any[]) {

    for (let i = array.length - 1; i >= 0; i--) {

      const randomIndex = Math.floor(Math.random() * (i));
      const itemAtIndex = array[randomIndex];

      array[randomIndex] = array[i];
      array[i] = itemAtIndex;
    }
  }
}
