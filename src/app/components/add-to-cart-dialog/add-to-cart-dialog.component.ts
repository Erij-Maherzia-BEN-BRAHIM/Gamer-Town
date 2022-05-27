import { Component, Inject, Input, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { CartService } from 'src/app/services/cart.service';
import { ProductsComponent } from '../products/products.component';

@Component({
  selector: 'app-add-to-cart-dialog',
  templateUrl: './add-to-cart-dialog.component.html',
  styleUrls: ['./add-to-cart-dialog.component.css']
})
export class AddToCartDialogComponent implements OnInit {
selectedProduct;
quantity=1;
totalItem=0;
products;
grandTotal !:number;

  constructor(private cartService: CartService,
    private router: Router,
    public dialogRef: MatDialogRef<ProductsComponent>,
    @Inject(MAT_DIALOG_DATA) public data:ProductsComponent) { this.selectedProduct=data}

  ngOnInit(): void {
    this.cartService.getProducts()
    .subscribe(res=>{
      this.totalItem = res.length;
    });
    this.cartService.getProducts()
    .subscribe(res=>{
      this.products = res;
      this.grandTotal = this.cartService.getTotalPrice();
    })

  }
  addToTheCart(){
 this.selectedProduct.total= this.quantity*this.selectedProduct.price;
this.cartService.addtoCart(this.selectedProduct, this.quantity);
this.router.navigate(['/cart']); 
this.dialogRef.close();
  }
}
