import {Component, OnInit} from '@angular/core';
import { StaysService } from './Stays.service';

@Component({
    template: `
    <div class="description">
     {{description}}
    </div>
    `,
})

export class DescriptionComponent implements OnInit{
    public description;

    constructor(private stayService: StaysService) {
        this.description = this.stayService.getDescription();
    }

    ngOnInit() {
        this.description = this.stayService.getDescription();
    }
}
