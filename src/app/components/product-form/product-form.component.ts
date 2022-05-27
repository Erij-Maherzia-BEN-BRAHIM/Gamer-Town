import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { FlashMessagesService } from 'flash-messages-angular';
import { Product } from 'src/app/models/Product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css'],
})
export class ProductFormComponent implements OnInit {
  id = '';
  product: Product = {
    id: '',
    category: '',
    description: '',
    image: '',
    price: 0,
    title: '',
  };
  constructor(
    private _productService: ProductService,
    private router: Router,
    private route: ActivatedRoute,
    private _flashmsg: FlashMessagesService
  ) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id') as string;
   if(this.id) this._productService
      .getProduct(this.id)
      .subscribe((p) => (this.product = p));
  }
  save(productForm: NgForm) {
  if(!productForm.valid){
this._flashmsg.show('There are some errors with the form!',{
  cssClass: 'alert alert-danger',
  setTimeout:5000
})
  }
  else  { if (this.id) {
      this._productService.updateProduct(productForm.value, this.id);
      this._flashmsg.show("Product Updated",{
        cssClass: 'alert alert-primary',
        setTimeout:4000
      })
    } else {
      this._productService.addProduct(productForm.value);
      this._flashmsg.show("A new product has been added",{
        cssClass: 'alert alert-success',
        setTimeout:4000
      })
    }

    this.router.navigate(['/products']);}
  }
  delete() {
    if (confirm('Are you sure you want to delete this product?')) {
      this._productService.deleteProduct(this.id);
      this._flashmsg.show("The product has been deleted",{
        cssClass: 'alert alert-danger',
        setTimeout:5000
      })
      this.router.navigate(['/products']);
    }
  }
}
