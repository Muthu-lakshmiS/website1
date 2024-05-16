import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { CartComponent } from './pages/cart/cart.component';
import { SaleComponent } from './pages/sale/sale.component';
import { ProductsComponent } from './pages/products/products.component';
import { ElectronicsComponent } from './products/electronics/electronics.component';
import { FashionComponent } from './products/fashion/fashion.component';
import { ToysComponent } from './products/toys/toys.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { LoginComponent } from './pages/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CartComponent,
    SaleComponent,
    ProductsComponent,
    ElectronicsComponent,
    FashionComponent,
    ToysComponent,
    NotFoundComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
