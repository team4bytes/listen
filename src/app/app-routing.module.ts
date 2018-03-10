import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
// import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ProductsComponent } from './products/products.component';
import { ListenComponent } from './listen/listen.component';
import { SpeechProcessingComponent } from './speech-processing/speech-processing.component';
import { StoreComponent } from './store/store.component';
import { LogoutComponent } from './logout/logout.component';

const routes: Routes = [
  { path: '', redirectTo: '/listen', pathMatch: 'full' },
    { path: 'result/:key', component: ProductsComponent },
    // { path: 'result', component: ProductsComponent },
  { path: 'listen', component: ListenComponent },
  {path:'nlp', component:SpeechProcessingComponent},
  {path:'logout', component:LogoutComponent},
  {path:'store', component:StoreComponent}
  
];
 
@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})

export class AppRoutingModule { }
