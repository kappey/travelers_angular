import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { GoogleMapsModule } from '@angular/google-maps';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule} from '@angular/forms';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ToastrModule } from 'ngx-toastr';

import { AppRoutingModule } from './app-routing.module';
import { AuthGuard } from './auth.guard';

import { LayoutComponent } from './components/layout/layout.component';
import { HomeComponent } from './components/home/home.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { Page404Component } from './components/page404/page404.component';
import { TravelerProfileComponent } from './components/traveler-profile/traveler-profile.component';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { ImagesComponent } from './components/images/images.component';
import { PostsComponent } from './components/posts/posts.component';
import { ReviewsComponent } from './components/reviews/reviews.component';

import { UserService } from './services/user.service';
import { TravelerService } from './services/traveler.service';
import { TokenInterceptorService } from './services/token-interceptor.service';
import { ImageService } from './services/image.service';
import { PostService } from './services/post.service';
import { WebSocketService } from './services/web-socket.service';
import { HttpErrorInterceptorService } from './services/http-error-interceptor.service';
import { FeedComponent } from './components/feed/feed.component';
import { LeftSideFeedComponent } from './components/left-side-feed/left-side-feed.component';
import { RightSideFeedComponent } from './components/right-side-feed/right-side-feed.component';
import { MainContentFeedComponent } from './components/main-content-feed/main-content-feed.component';
import { MainContentProfileComponent } from './components/main-content-profile/main-content-profile.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';


@NgModule({
  declarations: [
    LayoutComponent,
    HomeComponent,
    FooterComponent,
    HeaderComponent,
    Page404Component,
    TravelerProfileComponent,
    SignInComponent,
    SignUpComponent,
    ImagesComponent,
    PostsComponent,
    ReviewsComponent,
    FeedComponent,
    LeftSideFeedComponent,
    RightSideFeedComponent,
    MainContentFeedComponent,
    MainContentProfileComponent
  ],
  imports: [
    BrowserModule,
    GoogleMapsModule,
    HttpClientModule,
    FormsModule,
    RouterModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production,
      // Register the ServiceWorker as soon as the app is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000'
    })
  ],
  providers: [
    UserService,
    AuthGuard,
    TravelerService,
    ImageService, 
    PostService,
    WebSocketService,
    {
      provide:HTTP_INTERCEPTORS,
      useClass: TokenInterceptorService,
      multi: true
    },
    // {
    //   provide:HTTP_INTERCEPTORS,
    //   useClass: HttpErrorInterceptorService,
    //   multi: true
    // }
  ],
  bootstrap: [LayoutComponent]
})
export class AppModule { }
