import { NgModule } from '@angular/core';
import { ChildrenOutletContexts, RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { CartComponent } from './pages/cart/cart.component';
import { SaleComponent } from './pages/sale/sale.component';
import { ProductsComponent } from './pages/products/products.component';
import { ElectronicsComponent } from './products/electronics/electronics.component';
import { FashionComponent } from './products/fashion/fashion.component';
import { ToysComponent } from './products/toys/toys.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { LoginComponent } from './pages/login/login.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'products', component: ProductsComponent },
  { path: 'electronics', component: ElectronicsComponent },
  { path: 'fashion', component: FashionComponent },
  { path: 'toys', component: ToysComponent },
  {
    path: 'cart', component: CartComponent,
    children: [
      { path: 'electronics', component: ElectronicsComponent },
      { path: 'toys', component: ToysComponent },
      { path: 'fashion', component: FashionComponent },
      { path: 'login', component: LoginComponent }
    ]
  },
  { path: 'sale', component: SaleComponent },
  { path: 'login', component: LoginComponent },
  { path: "**", component: NotFoundComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
