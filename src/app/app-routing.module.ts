import { GalleriaComponent } from './screen/gallery/galleria.component';
import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {HeroTopComponent} from './heroes/hero-top/hero-top.component';
import {AppConfig} from './config/app.config';
import {Error404Component} from './core/error404/error-404.component';
import { PrimengBasicComponent } from './screen/primeng.basic.component';
import { TableComponent } from './screen/table/table.component';

const routes: Routes = [
  {path: '', redirectTo: '/', pathMatch: 'full'},
  {path: '', component: HeroTopComponent},
  {path: AppConfig.routes.heroes, loadChildren: 'app/heroes/heroes.module#HeroesModule'},
  {path: AppConfig.routes.primeng, component: PrimengBasicComponent},
  {path: AppConfig.routes.galleria, component: GalleriaComponent},
  {path: AppConfig.routes.table, component: TableComponent},
  {path: AppConfig.routes.error404, component: Error404Component},

  // otherwise redirect to 404
  {path: '**', redirectTo: '/' + AppConfig.routes.error404}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})

export class AppRoutingModule {
}
