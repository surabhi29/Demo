import {Component} from '@angular/core';
import { StaysService } from './Stays.service';

@Component({
    template: `
    <div style="margin-top: 30px; border-bottom: 1px solid #DCDCDC">
        <div style="font-size: 14px; font-weight: bold; margin-bottom: 10px">
            Food Options
            <span style="font-size: 14px; color:#999999"> 
                (*{{message}}.)
            </span>
            <div *ngIf="food['basic']['available'] == 1" style="margin-top: 30px">
                <a [routerLink]="['weekdays']" routerLinkActive="activeAnchor">Weedays</a>
                <a [routerLink]="['weekends']" routerLinkActive="activeAnchor" style="margin:0px 35px 0px 35px">Weekends</a>
            </div>
        </div>
        <router-outlet></router-outlet>

        <div  *ngIf="food['basic']['available'] == 1" class="foodDetails">SEE DETAILED MENU</div>
    </div>   
    `,
})

export class FoodComponent {
    public food;
    message;
    constructor(private stayService: StaysService) {
       this.food = this.stayService.getFood();
       this.message = this.food['basic']['details'];
    }
}
