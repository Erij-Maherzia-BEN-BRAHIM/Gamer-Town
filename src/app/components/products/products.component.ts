import {
  Component,
  EventEmitter,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { MatDialog } from '@angular/material/dialog';
import { MatMenuTrigger } from '@angular/material/menu';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from 'src/app/models/Product';
import { ApiService } from 'src/app/services/api.service';
import { CartService } from 'src/app/services/cart.service';
import { ProductService } from 'src/app/services/product.service';
import { AddToCartDialogComponent } from '../add-to-cart-dialog/add-to-cart-dialog.component';
import { ProductDetailsComponent } from '../product-details/product-details.component';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent implements OnInit {
  @ViewChild(MatMenuTrigger) trigger: MatMenuTrigger;
  public productList : any ;
  public filterCategory : any
  searchKey:string ="";
  selectedProduct: Product;
  id;
  products: Product[] = [];
  show = false;
  detailProd;
  constructor(
    private _productService: ProductService,
    private dialog: MatDialog,
    private cartServ: CartService,
    private api:ApiService
  ) {}

  ngOnInit(): void {
    this._productService.getProducts().subscribe((p: Product[]) => {
      console.log(p);
      this.products = p;
    });
    this.api.getProduct()
      .subscribe(res => {
        this.productList = res;
        this.filterCategory = res;
        this.productList.forEach((a: any) => {
          if (
            a.category === 'pc gaming' ||
            a.category === 'peripheriques gamers' ||
            a.category === 'accessoires gamers'
          ) {
            Object.assign(a, { quantity: 1, total: a.price });
          }
        });
        console.log(this.productList);
      });

    this.cartServ.search.subscribe((val: any) => {
      this.searchKey = val;
    });
  }
  viewMoreDetails(product: Product): void {
    this.selectedProduct = product;
    const dialogRef = this.dialog.open(ProductDetailsComponent, {
      width: '60%',
      height: 'auto',
      hasBackdrop: true,

      data: this.selectedProduct,
    });
    dialogRef.afterClosed().subscribe((product) => {
      this.selectedProduct = product;
    });
  }

  openCartDialog(product: Product): void {
    this.selectedProduct = product;
    const dialogRef = this.dialog.open(AddToCartDialogComponent, {
      width: '40%',
      height: 'auto',
      hasBackdrop: true,
      data: this.selectedProduct,
    });
    dialogRef.afterClosed().subscribe((product) => {
      this.selectedProduct = product;
    });
  }
  filter(category:string){
    this.filterCategory = this.productList
    .filter((a:any)=>{
      if(a.category == category || category==''){
        return a;
      }
    })
  }
  addtoCart(item, quantity) {
    this.cartServ.addtoCart(item, quantity);
  }
  someMethod() {
    this.trigger.openMenu();
  }
}
