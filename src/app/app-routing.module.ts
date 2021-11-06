import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuthGuard } from './auth.guard';

import { HomeComponent } from './components/home/home.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { FeedComponent } from './components/feed/feed.component';
import { TravelerProfileComponent } from './components/traveler-profile/traveler-profile.component'
import { Page404Component } from './components/page404/page404.component';

const routes: Routes = [
  { path: 'sign-in', component: HomeComponent }, 
  { path: 'sign-up', component: SignUpComponent },
  { path: "404", component: Page404Component },
  { path: ':id', component: TravelerProfileComponent, canActivate:[AuthGuard]},
  { path: '', component: FeedComponent, canActivate:[AuthGuard]}, 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
