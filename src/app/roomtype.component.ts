import {Component} from '@angular/core';

@Component({
    template: `
    <div style="margin-bottom: 30px; border-bottom: 1px solid #DCDCDC">
        <div class="roomTypes">Room types Available</div>
        <div class="links">
            <a [routerLink]="['1sharing']" routerLinkActive="activeAnchor">1 sharing</a>
            <a [routerLink]="['2sharing']" routerLinkActive="activeAnchor" style="margin:0px 35px 0px 35px">2 sharing</a>
            <a [routerLink]="['3sharing']" routerLinkActive="activeAnchor">3 sharing</a>
        </div>
    </div>   
    <router-outlet></router-outlet>   
    `,
})

export class RoomTypeComponent {
    constructor() {
    }
}
