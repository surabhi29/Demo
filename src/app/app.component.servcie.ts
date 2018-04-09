import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class AppService {

    constructor(private httpClient: HttpClient){}

    getPropertyData(propertyId) {
        return this.httpClient.get('https://prodapi.livezelo.com/pgs/details/' + propertyId + '.json');
    }

    getNearByProperties(latitude, longitude) {
        return this.httpClient.get('http://prodapi.livezelo.com/centers/search-nearby-pgs-optimized?latitude=' + latitude + '&longitude=' + longitude);
    }
}