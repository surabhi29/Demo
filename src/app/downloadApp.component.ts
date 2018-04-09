import {Component} from '@angular/core';
import { AppService } from './app.component.servcie';
import { StaysService } from './Stays.service';

@Component({
    template: `
        <div>
            <div style="margin-bottom: 20px">
                <img src="/assets/img/banner image.png" style="width:100%; height: 280px"/>
            </div>
            <div class="heading">
                <div *ngFor="let data of response['result']">
                    <div class="designData">
                        <div>
                            <div style="font-size: 33px; font-weight: bold">{{data.name}}</div>
                            <div style="margin-top: 25px; color: #666666;">{{data.locality}}</div>
                        </div>
                        <div style="margin-top: 16px;">
                            <button style="margin-right: 21px">SCHEDULE VISIT</button>
                            <button>BOOK NOW</button>
                        </div>
                    </div>
                    <div class="links">
                        <a [routerLink]="['description']" routerLinkActive="activeAnchor">DESCRIPTION</a>
                        <a [routerLink]="['roomType']"  routerLinkActive="activeAnchor" style="margin:0px 35px 0px 35px">ROOM TYPES</a>
                        <a [routerLink]="['food']" routerLinkActive="activeAnchor" style="margin:0px 35px 0px 0px">FOOD</a>
                        <a [routerLink]="['amenites']" routerLinkActive="activeAnchor" style="margin:0px 35px 0px 0px">AMENITES</a>
                        <a [routerLink]="['location']" routerLinkActive="activeAnchor">LOCATION</a>
                    </div>
                </div>
            </div>
            <div style="height: 390px">
            <router-outlet></router-outlet>
            </div>

            <div style="margin: 30px 0px 30px 0px; border-bottom: 1px solid #DCDCDC">
                <div style="margin: 30px 0px 30px 0px; font-size: 14px; font-weight: bold">Similar property</div>
                <div style="display: flex; flex-direction: row;max-width: 1303px; overflow-x: auto;">
                    <div *ngFor="let data of nearByProperties['result']" style="border: 1px solid #DCDCDC; margin-right: 20px; width: 200px; padding: 10px">
                        <img src="/assets/img/room type image.png" style="width:200px; height: 130px"/>
                        <div style="margin: 10px 0px 10px 0px; color: #333333">{{data['name']}}</div>
                        <div style="color: #999999; font-size: 14px; margin: 10px 0px 10px 0px; height: 35px; text-overflow: ellipsis">{{data['addressLine1']}}</div>
                        <div style="color: turquoise; font-size: 18px; font-weight: bold">Starts at Rs {{data['room']['basic']['minRent']}}</div>
                    </div>
                </div>
            </div>
        </div>
        
    `,
})

export class DownloadAppComponent {
    public latitude;
    public longitude;
    public response;
    nearByProperties;
    public propertyId='55a3b8ec7a6f6c4b8ca10000';
    constructor(private appService: AppService, private stayService: StaysService) {
        this.appService.getPropertyData(this.propertyId).subscribe((response) => {
        this.response = response;
        this.latitude = response['result'][0]['latitude'];
        this.longitude = response['result'][0]['longitude'];
        this.getNearbyProperties(this.latitude, this.longitude);
        this.stayService.emitResponse(this.response);
        },
        (error) => {
        console.log('Error::');
        });
    }

    getNearbyProperties(latitude, longitude) {
        
        this.appService.getNearByProperties(latitude, longitude).subscribe((response) => {
        this.nearByProperties = response;
        },
        (error) => {
        console.log('Error::');
        });
    }
}



// data['cover_photo']['url']  -----> not working