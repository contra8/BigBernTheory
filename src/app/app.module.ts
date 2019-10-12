import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SightsComponent } from './sights/sights.component';
import { SouvenirsComponent } from './souvenirs/souvenirs.component';
import { FoodComponent } from './food/food.component';
import { ClubbingComponent } from './clubbing/clubbing.component';
import { MountainsComponent } from './mountains/mountains.component';
import { GotthelfComponent } from './gotthelf/gotthelf.component';
import { MetanavbarComponent } from './metanavbar/metanavbar.component';
import { ProductComponent } from './product/product.component';
import { ProductAddComponent } from './product-add/product-add.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ProductEditComponent } from './product-edit/product-edit.component';

const appRoutes: Routes = [
  { path: 'sights', component: SightsComponent },
  { path: 'souvenirs',      component: SouvenirsComponent },
  { path: 'food', component: FoodComponent },
  { path: 'clubbing',      component: ClubbingComponent },
  { path: 'mountains', component: MountainsComponent },
  { path: 'gotthelf', component: GotthelfComponent },
  {
    path: 'products',
    component: ProductComponent,
    data: { title: 'Product List' }
  },
  {
    path: 'product-details/:id',
    component: ProductDetailComponent,
    data: { title: 'Product Details' }
  },
  {
    path: 'product-add',
    component: ProductAddComponent,
    data: { title: 'Product Add' }
  },
  {
    path: 'product-edit/:id',
    component: ProductEditComponent,
    data: { title: 'Product Edit' }
  },
  { path: '',
    redirectTo: '/products',
    pathMatch: 'full'
  }
  /*,
  { path: '**', component: PageNotFoundComponent } */
];

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SightsComponent,
    SouvenirsComponent,
    FoodComponent,
    ClubbingComponent,
    MountainsComponent,
    GotthelfComponent,
    MetanavbarComponent,
    ProductComponent,
    ProductAddComponent,
    ProductDetailComponent,
    ProductEditComponent
  ],
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    ),
    FormsModule,
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
