import {Component} from '@angular/core';
import { StaysService } from './Stays.service';

@Component({
    template: `
        <div style="margin: 30px 0px 30px 0px; border-bottom: 1px solid #DCDCDC">
            <div style="font-size: 14px; font-weight: bold; margin: 10px 0px 10px 0px">LOCATION AND NEIGHBOURHOOD</div>
            <div *ngFor="let data of arr">
                <div *ngIf="data['available']==1">{{data['distance']}} from {{data['title']}}</div>
            </div>
            <agm-map [latitude]="lat" [longitude]="lng"  style="height: 300px;"></agm-map>
    `,
})

export class LocationComponent {
    public location;
    arr; neighborhood;
    lat: number;
    lng: number;
    constructor(private stayService: StaysService) {
        this.location = this.stayService.getLocation();
        this.lat = this.location[1];
        this.lng = this.location[0];
        this.neighborhood = this.stayService.getNeighborhood();
        
        for(let a of [this.neighborhood]) {
            this.arr = Object.values(a);
        }
    }
}
