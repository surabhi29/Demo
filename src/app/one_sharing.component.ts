import {Component} from '@angular/core';
import { StaysService } from './Stays.service';

@Component({
    template: `
    <div style="display: flex; flex-direction: row; margin-top: 20px">
        <div style="margin-right: 20px">
            <img src="assets/img/room type image.png" style="width: 214px;height: 143px"/>
        </div>
        <div>
            <div style="font-size: 14px;font-weight: bold;">SINGLE SHARING</div>
            <div style="font-size: 14px; color: #999999; width: 247px; margin: 20px 0px 20px 0px">Single sharing offering comes with different perks like high speed wifi, housekeeping, food, television etc.</div>
            <div>
                <span>Rent starts from: <span style="font-size: 14px;font-weight: bold; margin-left: 5px; margin-bottom: 10px">{{rentAmount}}</span></span>
            </div>
            <div style="font-size: 14px;font-weight: bold">Deposit: {{depositAmount}}</div>
        </div>
    </div>`,
})

export class OneSharingComponent {
    public rent;
    public rentAmount;
    public depositAmount;
    constructor(private stayService: StaysService) {
        this.rent = this.stayService.getRentInfoSingle();
        this.rentAmount =  this.rent[0]['rentAmount'];
        this.depositAmount = this.rent[0]['depositAmount'];
    }
}
