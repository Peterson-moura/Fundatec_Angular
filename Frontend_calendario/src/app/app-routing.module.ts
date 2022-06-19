import { CalendarioCreateComponent } from "./components/calendario/calendario-create/calendario-create.component";
import { NgModule } from "@angular/core";

import { Routes, RouterModule } from "@angular/router";

import { HomeComponent } from "./views/home/home.component";

import { CalendarioCrudComponent } from "./views/calendario-crud/calendario-crud.component";

//rotas para localhost:4200/
const routes: Routes = [
  {
    path: "",
    component: HomeComponent,
  },
  //leva para a página de create com as infos do banco
  {
    path: "calendario",
    component: CalendarioCrudComponent,
  },
  //leva para página de criação
  {
    path: "calendario/create",
    component: CalendarioCreateComponent,
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
