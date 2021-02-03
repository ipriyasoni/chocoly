import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FeedComponent } from './feed/feed.component';
import { AboutComponent } from './about/about.component';
import { SettingComponent } from './setting/setting.component';
import { ProfileComponent } from './profile/profile.component';


const routes: Routes = [
  {
  path: 'feed',
  component: FeedComponent
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'setting',
    component: SettingComponent
  },
  {
    path: 'profile',
    component: ProfileComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
