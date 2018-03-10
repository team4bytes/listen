import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
// import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ProductsComponent } from './products/products.component';
import { ListenComponent } from './listen/listen.component';

const routes: Routes = [
  { path: '', redirectTo: '/listen', pathMatch: 'full' },
    { path: 'result/:key', component: ProductsComponent },
    // { path: 'result', component: ProductsComponent },
  { path: 'listen', component: ListenComponent }
];
 
@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})

export class AppRoutingModule { }
