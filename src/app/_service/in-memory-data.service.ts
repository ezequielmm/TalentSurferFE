import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { CERTAINTIES as certainty } from '../_mocks/mock-opportunity-certainties';

@Injectable({
    providedIn: "root"
})

export class InMemoryDataService implements InMemoryDbService {

    createDb() {
        return { certainty };
    }
}
