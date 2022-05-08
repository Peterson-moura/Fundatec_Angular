import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FooterComponent } from './components/template/footer/footer.component';
import{ MatToolbarModule } from '@angular/material/toolbar';
import { NavComponent } from './components/template/nav/nav.component';
import {MatSidenavModule} from '@angular/material/sidenav'
import {MatCardModule} from '@angular/material/card'
import {MatListModule} from '@angular/material/list';
import { HomeComponent } from './views/home/home.component';
import { CalendarioCrudComponent } from './views/calendario-crud/calendario-crud.component';
import { CalendarioCreateComponent } from './components/calendario/calendario-create/calendario-create.component'
import {MatButtonModule} from '@angular/material/button'
import { HeaderComponent } from './components/template/header/header.component';
import {MatSnackBarModule} from '@angular/material/snack-bar'
import{HttpClientJsonpModule, HttpClientModule} from '@angular/common/http'

import {FormsModule} from '@angular/forms';
import {MatFormFieldModule}from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input'
import {MatSelectModule}from '@angular/material/select'

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NavComponent,
    HomeComponent,
    CalendarioCrudComponent,
    CalendarioCreateComponent
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
    MatSelectModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
