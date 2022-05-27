import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Product } from '../models/Product';
import {
  AngularFirestore,
  AngularFirestoreModule,
} from '@angular/fire/compat/firestore';
import { Action } from 'rxjs/internal/scheduler/Action';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  constructor(private afs: AngularFirestore) {}
  getProducts(): Observable<Product[]> {
    // return this.afs.collection<Product>("products").valueChanges();
    return this.afs
      .collection<Product>('products')
      .snapshotChanges()
      .pipe(
        map((changes: any) =>
          changes.map((c: any) => ({
            id: c.payload.doc.id,
            ...c.payload.doc.data(),
          }))
        )
      );
  }
  addProduct(product: Product): void {
    this.afs.collection<Product>('products').add(product);
  }
  getProduct(id: string): Observable<Product> {
  //  return this.afs.doc<Product>('products/${id}')
  return this.afs.collection('products').doc(id)
      .snapshotChanges()
      .pipe(
        map((action: any) => {
          if (action.payload.exists === false) {
            return new Object() as Product;
          } else {
            const data = action.payload.data() as Product;
            data.id = action.payload.id;
            return data;
          }
        })
      );
  }
  updateProduct(product: Product, productId: string):void{
this.afs.collection<Product>("products").doc(productId).update(product);
  }
  deleteProduct(productId: string): void{
    //this.afs.doc<Product>('products/${productId}').delete();
    this.afs.collection<Product>("products").doc(productId).delete();
  }
}
