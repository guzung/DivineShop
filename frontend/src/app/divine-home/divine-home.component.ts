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

  constructor(private productsService: ProductsService) {

  }

  ngOnInit() {
    this.subscriptions.push(this.productsService.getAllProducts().subscribe(divineProducts => {
      this.products = divineProducts;
      console.log(this.products);
      for (let i = 0; i < 20; i++) {
        this.products.push({});
      }
    }));


  }

  //todo: https://stackoverflow.com/a/47515273/9148387

  ngOnDestroy(): void {
    this.subscriptions.forEach(s => s.unsubscribe());
  }

}
