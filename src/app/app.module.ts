import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
// import { FormsModule } from '@angular/forms';
// import { HttpModule } from '@angular/http';

import { MaterialModule } from '@angular/material';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { AdminModule } from './admin/admin.module';
import { Feature1Module } from './feature1/feature1.module';
import { Feature2Module } from './feature2/feature2.module';
import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login.component';
import { HomeComponent } from './home.component';

import { AuthService } from './auth.service';
import { AuthGuard} from './auth-guard.service';
// import { DialogService } from './DialogService';

@NgModule({
  imports: [
    BrowserModule,
    // FormsModule,
    // HttpModule,
    MaterialModule.forRoot(),
    AdminModule,
    Feature1Module,
    Feature2Module,
    LoginRoutingModule,
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent
  ],
  providers: [
    AuthService,
    AuthGuard
    // DialogService
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
