import { Injectable } from '@angular/core';
import {Location, LocationStrategy, PathLocationStrategy} from '@angular/common';
@Injectable({ providedIn: 'root' })
export class LocationManager {
    constructor(public location: Location){

    }
}