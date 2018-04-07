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
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { UsersComponent } from './components/dashboard/components/users/users.component';
import { UploadComponent } from './components/dashboard/components/upload/upload.component';
import { MailComponent } from './components/dashboard/components/mail/mail.component';

const routes:Routes = [
  { path:'',component:HomeComponent },
  { path:'register',component:RegisterComponent },
  { path:'portfolio',component:PortfolioComponent },
  { path:'login',component:LoginComponent },
  { path:'dashboard',component:DashboardComponent,
      children: [
        { path: '', redirectTo: 'upload', pathMatch: 'full' },
        { path:'upload',component:UploadComponent },
        { path:'users',component:UsersComponent },
        { path: 'mail', component:MailComponent }
      ] }
];

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    RegisterComponent,
    PortfolioComponent,
    LoginComponent,
    DashboardComponent,
    UsersComponent,
    UploadComponent,
    MailComponent
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
