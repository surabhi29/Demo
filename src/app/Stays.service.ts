import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class StaysService {
    description;
    rentInfoSingle;
    rentInfoDouble;
    rentInfoTriple;
    food;amenities;
    location; neighborhood;
    private responseChangeSource = new Subject<boolean>();
    changeEmitted$ = this.responseChangeSource.asObservable();

    emitResponse(showResponse: boolean) {
        this.description = showResponse['result'][0]['description'];
        this.rentInfoSingle = showResponse['result'][0]['extraInfo']['sharingMap']['1'];
        this.rentInfoDouble = showResponse['result'][0]['extraInfo']['sharingMap']['2'];
        this.rentInfoTriple = showResponse['result'][0]['extraInfo']['sharingMap']['3'];
        this.food = showResponse['result'][0]['food'];
        this.amenities = showResponse['result'][0]['amenities'];
        this.location = showResponse['result'][0]['location'];
        this.neighborhood = showResponse['result'][0]['neighborhood'];
        this.responseChangeSource.next(showResponse);
    }

    getDescription() {
        return this.description;
    }

    getRentInfoSingle() {
        return this.rentInfoSingle;
    }

    getRentInfoDouble() {
        return this.rentInfoDouble;
    }

    getRentInfoTriple() {
        return this.rentInfoTriple;
    }

    getFood() {
        return this.food;
    }

    getAmenities() {
        return this.amenities;
    }

    getLocation() {
        return this.location;
    }

    getNeighborhood() {
        return this.neighborhood;
    }
}

