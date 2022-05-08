import { CalendarioCreateComponent } from './components/calendario/calendario-create/calendario-create.component';
import { NgModule } from "@angular/core";

import { Routes, RouterModule } from "@angular/router";

import { HomeComponent } from "./views/home/home.component";

import { CalendarioCrudComponent } from "./views/calendario-crud/calendario-crud.component";




const routes: Routes = [
  {
    path: "",
    component: HomeComponent
  },{
    path:"calendario",
    component: CalendarioCrudComponent
  },{
    path:"calendario/create",
    component: CalendarioCreateComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
