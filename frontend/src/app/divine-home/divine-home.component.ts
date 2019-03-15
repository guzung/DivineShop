import {Component, OnDestroy, OnInit} from '@angular/core';
import {ProductsService} from '../services/products.service';
import {Observable, Subscription} from 'rxjs';
import {ToastrService} from 'ngx-toastr';
import {NgxSpinnerService} from 'ngx-spinner';

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

  constructor(private productsService: ProductsService,
              private msg: ToastrService,
              private load: NgxSpinnerService) {

  }

  ngOnInit() {
    this.load.show();
    this.categories.push({id: 4});
    this.subscriptions.push(this.productsService.getAllCategories().subscribe(categories => {
      this.categories = categories;
      console.log(this.categories);

      this.subscriptions.push(this.initRandomProducts().subscribe(prods => {
        console.log('random', prods);
        this.randomProducts = prods;
        this.products = this.randomProducts;
        this.load.hide();
      }));
    }, error1 => this.load.hide()));
  }

   selectCategory(c) {
    this.selectedCategoryId = c.id;
    this.products = c.products;
  }

  buy(p) {
    this.msg.success('Produsul a fost adăugat în coș');
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach(s => s.unsubscribe());
  }

  initRandomProducts(): Observable<any[]> {
    const randomProductsObservable = new Observable<any[]>(observer => {
      const randomProds = [];
      this.categories.forEach(c => {
        if (c.products.length > 0) {
          randomProds.push(...c.products.slice(0, 3));
        }
      });

      this.shuffle(randomProds);

      observer.next(randomProds);
    });

    return randomProductsObservable;
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
