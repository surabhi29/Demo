import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { AboutComponent } from './about.component';
import { DownloadAppComponent } from './downloadApp.component';
import { DescriptionComponent } from './description.component';
import { RoomTypeComponent } from './roomtype.component';
import { FoodComponent } from './food.component';
import { AmenitesComponent } from './amenites.component';
import { LocationComponent } from './location.component';
import { OneSharingComponent } from './one_sharing.component';
import { TwoSharingComponent } from './two_sharing.component';
import { ThreeSharingComponent } from './three_sharing.component';
import { WeekdaysComponent } from './weekdays.component';
import { WeekendsComponent } from './weekends.component';

const routes: Routes = [
    {
      path: '',
      redirectTo: 'downloadApp',
      pathMatch: 'full'
    },
    {
        path: 'about',
        component: AboutComponent
    },
    {
        path: 'downloadApp',
        component: DownloadAppComponent,
        children: [
          {
            path: '',
            redirectTo: 'description',
            pathMatch: 'full'
          },
          {
            path: 'description',
            component: DescriptionComponent
          },
          {
            path: 'roomType',
            component: RoomTypeComponent,
            children: [
              {
                path: '',
                redirectTo: '1sharing',
                pathMatch: 'full'
              },
              {
                path: '1sharing',
                component: OneSharingComponent
              },
              {
                path: '2sharing',
                component: TwoSharingComponent
              },
              {
                path: '3sharing',
                component: ThreeSharingComponent
              }
            ]
          },
          {
            path: 'food',
            component: FoodComponent,
            children: [
              {
                path: '',
                redirectTo: 'weekdays',
                pathMatch: 'full'
              },
              {
                path: 'weekdays',
                component: WeekdaysComponent
              },
              {
                path: 'weekends',
                component: WeekendsComponent
              }
            ]
          },
          {
            path: 'amenites',
            component: AmenitesComponent
          },
          {
            path: 'location',
            component: LocationComponent
          }
        ]
    }    
  ];
  
  @NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class ZoloRoutingModule {}
  