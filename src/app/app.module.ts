import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ManuIconComponent } from './nav_component/navigatin-bar/manu-icon/manu-icon.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { NavigatinBarComponent } from './nav_component/navigatin-bar/navigatin-bar.component';
import { SearchComponentComponent } from './nav_component/navigatin-bar/search-component/search-component.component';
import { TimeComponent } from './nav_component/navigatin-bar/time/time.component';
import { LeftArrowComponent } from './nav_component/navigatin-bar/left-arrow/left-arrow.component';
import { RightArrowComponent } from './nav_component/navigatin-bar/right-arrow/right-arrow.component';
import { SidebarComponent } from './side_bar/sidebar/sidebar.component';
import { HeadphoneComponent } from './nav_component/navigatin-bar/headphone/headphone.component';
import { HomeComponent } from './side_bar/sidebar/home/home.component';
import { ActivityComponent } from './side_bar/sidebar/activity/activity.component';
import { DMsComponent } from './side_bar/sidebar/dms/dms.component';
import { PersonComponent } from './side_bar/sidebar/person/person.component';
import { AddPersonComponent } from './side_bar/sidebar/add-person/add-person.component';
import { HeaderComponent } from './Header/header/header.component';
import { ChannelNameComponent } from './Header/header/channel-name/channel-name.component';
import { FilterComponent } from './Header/header/filter/filter.component';
import { NewMessageComponent } from './Header/header/new-message/new-message.component';
import { LowerBarComponent } from './Header/lower-bar/lower-bar.component';
import { ThreadComponent } from './Header/lower-bar/thread/thread.component';
import { SendComponent } from './Header/lower-bar/send/send.component';
import { MoreComponent } from './side_bar/sidebar/more/more.component';
import { ChanelCreateComponent } from './Header/lower-bar/chanel-create/chanel-create.component';
import { ProjectComponent } from './Header/lower-bar/chanel-create/project/project.component';
import { RandomComponent } from './Header/lower-bar/chanel-create/random/random.component';
import { GeneralComponent } from './Header/lower-bar/chanel-create/general/general.component';
import { AddChannelComponent } from './Header/lower-bar/chanel-create/add-channel/add-channel.component';
import { DirectMessageComponent } from './Header/lower-bar/direct-message/direct-message.component';
import { RightBarComponent } from './rightbar/right-bar/right-bar.component';
import { UppersideComponent } from './rightbar/right-bar/upperside/upperside.component';
import { ModdelsideComponent } from './rightbar/right-bar/moddelside/moddelside.component';
import { LastsideComponent } from './rightbar/right-bar/lastside/lastside.component';

@NgModule({
  declarations: [
    AppComponent,
    ManuIconComponent,
    NavigatinBarComponent,
    SearchComponentComponent,
    TimeComponent,
    LeftArrowComponent,
    RightArrowComponent,
    SidebarComponent,
    HeadphoneComponent,
    HomeComponent,
    ActivityComponent,
    DMsComponent,
    PersonComponent,
    AddPersonComponent,
    HeaderComponent,
    ChannelNameComponent,
    FilterComponent,
    NewMessageComponent,
    LowerBarComponent,
    ThreadComponent,
    SendComponent,
    MoreComponent,
    ChanelCreateComponent,
    ProjectComponent,
    RandomComponent,
    GeneralComponent,
    AddChannelComponent,
    DirectMessageComponent,
    RightBarComponent,
    UppersideComponent,
    ModdelsideComponent,
    LastsideComponent,
  
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatMenuModule,
    MatButtonModule,
    MatIconModule,   
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
