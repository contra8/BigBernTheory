import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SightsComponent } from './sights/sights.component';
import { SouvenirsComponent } from './souvenirs/souvenirs.component';
import { FoodComponent } from './food/food.component';
import { ClubbingComponent } from './clubbing/clubbing.component';
import { MountainsComponent } from './mountains/mountains.component';

const appRoutes: Routes = [
  { path: 'sights', component: SightsComponent },
  { path: 'souvenirs',      component: SouvenirsComponent },
  { path: 'food', component: FoodComponent },
  { path: 'clubbing',      component: ClubbingComponent },
  { path: 'mountains', component: MountainsComponent },
  { path: '',
    redirectTo: '/',
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
    MountainsComponent
  ],
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    ),
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
