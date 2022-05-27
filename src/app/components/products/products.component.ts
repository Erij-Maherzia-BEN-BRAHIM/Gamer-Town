import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from 'src/app/models/Product';
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
  selectedProduct: Product;
  id;
  products: Product[] = [];
  show = false;
  detailProd;
  constructor(
    private _productService: ProductService,
    private router: Router,
    private route: ActivatedRoute,
    private dialog: MatDialog,
    private cartServ: CartService
  ) {}

  ngOnInit(): void {
    this._productService.getProducts().subscribe((p: Product[]) => {
      console.log(p);
      this.products = p;
    });
  }
  viewMoreDetails(product: Product): void {
    this.selectedProduct = product
    const dialogRef = this.dialog.open(ProductDetailsComponent, {
      width      : '60%',
      height     : 'auto',
      hasBackdrop: true,
  
      data: this.selectedProduct,
    });
    dialogRef.afterClosed().subscribe((product) => {
      this.selectedProduct = product;
    });

  }
 
  openCartDialog(product: Product):void {
    this.selectedProduct = product
    const dialogRef = this.dialog.open(AddToCartDialogComponent,
       {
        width      : '40%',
        height     : 'auto',
        hasBackdrop: true,
      data: this.selectedProduct,
    });
    dialogRef.afterClosed().subscribe((product) => {
      this.selectedProduct = product;
    });
 
  }
  addtoCart(item, quantity){
   this.cartServ.addtoCart(item, quantity);
      }
}


