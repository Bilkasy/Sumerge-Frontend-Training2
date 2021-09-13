import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MenuComponent } from './menu/menu.component';
import { FooterComponent } from './footer/footer.component';
import { CarrouselComponent } from './menu/carrousel/carrousel.component';
import { Routes,RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { FormsModule } from '@angular/forms';
import { Checkout2Component } from './menu/checkout2/checkout2.component';

const appRoutes: Routes = [
    {path: '',component: HomeComponent},
    {path: 'eatNow',component: MenuComponent},
    {path: 'login-signup',component: LoginComponent},
    {path: 'login-signup/signup',component: SignupComponent},
    {path: 'checkout2',component: Checkout2Component}

];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MenuComponent,
    FooterComponent,
    CarrouselComponent,
    HomeComponent,
    LoginComponent,
    SignupComponent,
    Checkout2Component,
    // Checkout1Component
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
