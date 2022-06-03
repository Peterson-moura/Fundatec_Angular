import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { FooterComponent } from "./components/template/footer/footer.component";
import { MatToolbarModule } from "@angular/material/toolbar";
import { NavComponent } from "./components/template/nav/nav.component";
import { MatSidenavModule } from "@angular/material/sidenav";
import { MatCardModule } from "@angular/material/card";
import { MatListModule } from "@angular/material/list";
import { HomeComponent } from "./views/home/home.component";
import { CalendarioCrudComponent } from "./views/calendario-crud/calendario-crud.component";
import { CalendarioCreateComponent } from "./components/calendario/calendario-create/calendario-create.component";
import { MatButtonModule } from "@angular/material/button";
import { HeaderComponent } from "./components/template/header/header.component";
import { MatSnackBarModule } from "@angular/material/snack-bar";
import { HttpClientJsonpModule, HttpClientModule } from "@angular/common/http";

import { FormsModule } from "@angular/forms";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { MatSelectModule } from "@angular/material/select";
import { CalendarioReadComponent } from "./components/calendario/calendario-read/calendario-read.component";
import { MatTableModule } from "@angular/material/table";
import { MatPaginatorModule } from "@angular/material/paginator";
import { MatSortModule } from "@angular/material/sort";
import { CalendarioUpdateComponent } from "./components/calendario/calendario-update/calendario-update.component";
import { CalendarioDeleteComponent } from "./components/calendario/calendario-delete/calendario-delete.component";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NavComponent,
    HomeComponent,
    CalendarioCrudComponent,
    CalendarioCreateComponent,
    CalendarioReadComponent,
    CalendarioUpdateComponent,
    CalendarioDeleteComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatCardModule,
    MatButtonModule,
    MatSnackBarModule,
    HttpClientJsonpModule,
    HttpClientModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
