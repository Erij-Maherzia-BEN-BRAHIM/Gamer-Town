import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ProductsComponent } from './components/products/products.component';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'gamer-town';
  constructor(public dialog: MatDialog){}
  openDialog(){
this.dialog.open(ProductsComponent);
  }
}
