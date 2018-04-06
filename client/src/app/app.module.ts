import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Router,Routes } from '@angular/router';
import { NgxImageGalleryModule } from 'ngx-image-gallery';
import { AnimateOnScrollModule } from 'ng2-animate-on-scroll';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { RegisterComponent } from './components/register/register.component';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { LoginComponent } from './components/login/login.component';

const routes:Routes = [
  { path:'',component:HomeComponent },
  { path:'register',component:RegisterComponent },
  { path:'portfolio',component:PortfolioComponent },
  { path:'login',component:LoginComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    RegisterComponent,
    PortfolioComponent,
    LoginComponent
  ],
  imports: [
    NgxImageGalleryModule,
    BrowserModule,
    RouterModule.forRoot(routes),
    AnimateOnScrollModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
