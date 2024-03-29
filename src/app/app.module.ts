import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
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
import { DocumentComponent } from './document/document.component';
import { AktuellesComponent } from './aktuelles/aktuelles.component';
import { EditionComponent } from './edition/edition.component';
import { ProjektComponent } from './projekt/projekt.component';
import { SucheComponent } from './suche/suche.component';
import { HomeComponent } from './home/home.component';

const appRoutes: Routes = [
  { path: 'aktuelles', component: AktuellesComponent },
  { path: 'edition', component: EditionComponent },
  { path: 'projekt', component: ProjektComponent },
  { path: 'suche', component: SucheComponent },
  { path: 'sights', component: SightsComponent },
  { path: 'souvenirs', component: SouvenirsComponent },
  { path: 'food', component: FoodComponent },
  { path: 'clubbing', component: ClubbingComponent },
  { path: 'mountains', component: MountainsComponent },
  { path: 'gotthelf', component: GotthelfComponent },
  { path: 'home', component: HomeComponent },
  {
    path: 'document',
    component: DocumentComponent,
    data: { title: 'Gotthelf-Edition: 1 Dokument' }
  },
  { path: '',
    redirectTo: '/home',
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
    DocumentComponent,
    AktuellesComponent,
    EditionComponent,
    ProjektComponent,
    SucheComponent,
    HomeComponent
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