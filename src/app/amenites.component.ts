import {Component, OnInit} from '@angular/core';
import { StaysService } from './Stays.service';

@Component({
    template: `
        <div style="width: 500px; margin-top: 30px; margin-bottom: 30px; border-bottom: 1px solid #DCDCDC">
            <div style="margin-bottom: 30px">Property Amenities</div>
            <div style="width: 500px;display: flex; flex-direction: row; flex-flow: wrap">
                <div *ngFor="let data of arr">
                    <div *ngIf="data['available'] == 1" style="width: 50px; margin-right: 30px; margin-bottom : 30px">
                        <div style="font-weight: bold; font-size: 12px;margin-top: 4px;">{{data['title']}}</div>
                        <div style="font-size: 12px; color:#999999; margin-top: 10px">{{data['details']}}</div>
                    </div>
                </div>
            </div>
        </div>
    `,
})

export class AmenitesComponent implements OnInit{
    public amenities;
    arr;
    constructor(private stayService: StaysService) {
        // this.amenities = [this.stayService.getAmenities()];
        // console.log('object::' + JSON.stringify(this.amenities));
    }

    ngOnInit() {
        this.amenities = [this.stayService.getAmenities()];
        for(let a of this.amenities) {
            this.arr = Object.values(a);
        }
    }
}