import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { CERTAINTIES as certainty } from '../_mocks/mock-certainties';
import { LOCATIONS as location } from '../_mocks/mock-locations';

@Injectable({
    providedIn: "root"
})

export class InMemoryDataService implements InMemoryDbService {

    createDb() {
        return { certainty, location };
    }
}
