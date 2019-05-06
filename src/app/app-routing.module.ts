import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { CategoriesComponent } from './platform/components/categories/categories.component';

const appRoutes: Routes = [
  { path: '', component: CategoriesComponent },
];

@NgModule({
  imports: [ RouterModule.forRoot(
    appRoutes,
    { enableTracing: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
