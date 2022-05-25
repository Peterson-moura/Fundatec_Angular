import { CalendarioDeleteComponent } from './components/calendario/calendario-delete/calendario-delete.component';
import { CalendarioUpdateComponent } from './components/calendario/calendario-update/calendario-update.component';
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
  },
  {
    path:"calendario/update/:id",
    component: CalendarioUpdateComponent
  },
  {
    path:"calendario/delete",
    component: CalendarioDeleteComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
