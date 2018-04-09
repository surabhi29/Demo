import {Component} from '@angular/core';
import { StaysService } from './Stays.service';

@Component({
    template: `
    <div style="display: flex; flex-direction: row; margin: 30px 0px 20px 0px">
        <div  *ngIf="food['breakfast']['weekdays'] == 1" style="display: flex; flex-direction: row;">
            <img src="/assets/img/breakfast.png" style="width: 40px; height: 40px"/>
            <div>
                <div style="font-weight: bold; font-size: 12px;margin-top: 4px;">Breakfast</div>
                <div style="font-size: 12px; color:#999999">{{food['breakfast']['details']}}</div>
            </div>
        </div>
        <div *ngIf="food['lunch']['weekdays'] == 1" style="display: flex; flex-direction: row; margin: 0px 30px 0px 30px ">
             <img src="/assets/img/lunch.png" style="width: 40px; height: 40px"/>
             <div>
                <div style="font-weight: bold; font-size: 12px;margin-top: 4px;">Lunch</div>
                <div style="font-size: 12px; color:#999999">{{food['lunch']['details']}}</div>
            </div>
        </div>
        <div *ngIf="food['dinner']['weekdays'] == 1" style="display: flex; flex-direction: row;">
            <img src="/assets/img/dinner.png" style="width: 40px; height: 40px"/>
            <div>
                <div style="font-weight: bold; font-size: 12px;margin-top: 4px;">Dinner</div>
                <div style="font-size: 12px; color:#999999">{{food['dinner']['details']}}</div>
            </div>
        </div>
    </div>
    `,
})

export class WeekdaysComponent {
    public food;
    constructor(private stayService: StaysService) {
        this.food = this.stayService.getFood();
    }
}
