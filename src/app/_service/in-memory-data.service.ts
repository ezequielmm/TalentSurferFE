import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { CERTAINTIES as certainty } from '../_mocks/mock-certainties';
import { LOCATIONS as location } from '../_mocks/mock-locations';
import { STATUSES as status } from '../_mocks/mock-statuses';
import { SENIORITIES as seniority } from '../_mocks/mock-seniorities';

@Injectable({
    providedIn: "root"
})

export class InMemoryDataService implements InMemoryDbService {

    createDb() {
        return { certainty, location, status, seniority };
    }
}
