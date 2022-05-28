import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './components/nav/nav.component';
import { ProductsComponent } from './components/products/products.component';
import { ProductFormComponent } from './components/product-form/product-form.component';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideAnalytics,getAnalytics,ScreenTrackingService,UserTrackingService } from '@angular/fire/analytics';
import { provideAuth,getAuth } from '@angular/fire/auth';
import { provideDatabase,getDatabase } from '@angular/fire/database';
import { provideFirestore,getFirestore } from '@angular/fire/firestore';
import { provideFunctions,getFunctions } from '@angular/fire/functions';
import { provideMessaging,getMessaging } from '@angular/fire/messaging';
import { providePerformance,getPerformance } from '@angular/fire/performance';
import { provideRemoteConfig,getRemoteConfig } from '@angular/fire/remote-config';
import { provideStorage,getStorage } from '@angular/fire/storage';
 import { AngularFireModule } from '@angular/fire/compat';
 import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { FormsModule } from '@angular/forms';
import { FlashMessagesModule } from 'flash-messages-angular';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ConnexionClientComponent } from './components/login/connexion-client.component';
import { AccountClientFormComponent } from './components/register/account-client-form.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import {MatDialogModule, MAT_DIALOG_DEFAULT_OPTIONS} from '@angular/material/dialog';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { VerifyEmailComponent } from './components/verify-email/verify-email.component';
import { CartComponent } from './components/cart/cart.component';
import { MatSliderModule } from '@angular/material/slider';
import { AddToCartDialogComponent } from './components/add-to-cart-dialog/add-to-cart-dialog.component';
import { MatMenuModule} from '@angular/material/menu';
import { FilterPipe } from './shared/filter.pipe';
import { HttpClientModule } from '@angular/common/http';


 @NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    ProductsComponent,
    ProductFormComponent,
    ConnexionClientComponent,
    AccountClientFormComponent,
    ForgotPasswordComponent,
    VerifyEmailComponent,
    CartComponent,
    AddToCartDialogComponent,
    ProductDetailsComponent,
    FilterPipe

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAnalytics(() => getAnalytics()),
    provideAuth(() => getAuth()),
    provideDatabase(() => getDatabase()),
    provideFirestore(() => getFirestore()),
    provideFunctions(() => getFunctions()),
    provideMessaging(() => getMessaging()),
    providePerformance(() => getPerformance()),
    provideRemoteConfig(() => getRemoteConfig()),
    provideStorage(() => getStorage()),
    AngularFirestoreModule,
    FormsModule,
    FlashMessagesModule.forRoot(),
    NgbModule,
    NoopAnimationsModule, 
    MatDialogModule,
    MatSliderModule,
    MatMenuModule,
    HttpClientModule
  ],
  providers: [
    ScreenTrackingService,UserTrackingService, {provide: MAT_DIALOG_DEFAULT_OPTIONS, useValue: {hasBackdrop: false}}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
