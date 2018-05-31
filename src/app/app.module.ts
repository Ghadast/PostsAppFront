import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';
import { AppComponent } from './app.component';
import { PostListComponent } from './components/post-list/post-list.component';
import {HttpClientModule} from '@angular/common/http';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { Routes, RouterLink,RouterModule } from '@angular/router';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { PostDetailsComponent } from './components/post-details/post-details.component';
import { PostDetailsGuard } from './guards/post-details.guard';
import { RoutingModule } from './routing/routing.module';



@NgModule({
  declarations: [
    AppComponent,
    PostListComponent,
    NavbarComponent,
    FooterComponent,
    NotfoundComponent,
    WelcomeComponent,
    PostDetailsComponent
  ],
  imports:
   [
    BrowserModule,
    HttpClientModule,
    RoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
