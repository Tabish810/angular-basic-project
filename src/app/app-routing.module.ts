import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { projection } from '@angular/core/src/render3';
import { ServicesComponent } from './services/services.component';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [
  {
    path:"dashboard",
    component: DashboardComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
