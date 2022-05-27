import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './components/cart/cart.component';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { ConnexionClientComponent } from './components/login/connexion-client.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { ProductFormComponent } from './components/product-form/product-form.component';
import { ProductsComponent } from './components/products/products.component';
import { AccountClientFormComponent } from './components/register/account-client-form.component';
import { VerifyEmailComponent } from './components/verify-email/verify-email.component';

const routes: Routes = [

  {path:"", component: ConnexionClientComponent},
  {path:"products", component: ProductsComponent},
  {path:"product/new", component: ProductFormComponent},
  {path:"product/:id", component: ProductFormComponent},
  {path:"product/:id/details", component: ProductDetailsComponent},
  {path:"login", component: ConnexionClientComponent},
  {path:"register", component: AccountClientFormComponent},
  {path: "forgotPassword", component: ForgotPasswordComponent},
  {path:"verify-email", component:VerifyEmailComponent},
  {path:"cart", component:CartComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
