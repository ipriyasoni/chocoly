import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FeedComponent } from './feed/feed.component';
import { AboutComponent } from './about/about.component';
import { SettingComponent } from './setting/setting.component';
import { ProfileComponent } from './profile/profile.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    FeedComponent,
    AboutComponent,
    SettingComponent,
    ProfileComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
