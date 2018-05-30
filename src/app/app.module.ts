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

const _routes: Routes= [
  // objets json de configuration de routage
{path: 'posts', component: PostListComponent},
{path: 'welcome', component: WelcomeComponent},
{path: '', redirectTo:'/welcome',pathMatch:'full'},
{path: '**', component: NotfoundComponent},
]

@NgModule({
  declarations: [
    AppComponent,
    PostListComponent,
    NavbarComponent,
    FooterComponent,
    NotfoundComponent,
    WelcomeComponent
  ],
  imports:
   [RouterModule.forRoot(_routes),
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
