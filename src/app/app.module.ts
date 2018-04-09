import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppService } from './app.component.servcie';
import { ZoloRoutingModule } from './app.routing';
import { AboutComponent } from './about.component';
import { DownloadAppComponent } from './downloadApp.component';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { DescriptionComponent } from './description.component';
import { LocationComponent } from './location.component';
import { RoomTypeComponent } from './roomtype.component';
import { AmenitesComponent } from './amenites.component';
import { FoodComponent } from './food.component';
import { StaysService } from './Stays.service';
import { OneSharingComponent } from './one_sharing.component';
import { TwoSharingComponent } from './two_sharing.component';
import { ThreeSharingComponent } from './three_sharing.component';
import { WeekdaysComponent } from './weekdays.component';
import { WeekendsComponent } from './weekends.component';
import { AgmCoreModule } from '@agm/core';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    DownloadAppComponent,
    DescriptionComponent,
    AmenitesComponent,
    LocationComponent,
    RoomTypeComponent,
    FoodComponent,
    OneSharingComponent,
    TwoSharingComponent,
    ThreeSharingComponent,
    WeekdaysComponent,
    WeekendsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule,
    ZoloRoutingModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyCBZamwl-Djge72grxf7OAVk6MV0walpxI'
    })
  ],
  providers: [AppService, StaysService],
  bootstrap: [AppComponent]
})
export class AppModule { }
