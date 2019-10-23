import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { CERTAINTIES as certainty } from '../_mocks/mock-certainties';
import { LOCATIONS as location } from '../_mocks/mock-locations';
import { STATUSES as status } from '../_mocks/mock-statuses';
import { SENIORITIES as seniority } from '../_mocks/mock-seniorities';
import { SERVICELINES as serviceline } from '../_mocks/mock-service-lines';
import { POSITIONSTATUSES as positionstatus } from '../_mocks/mock-position-statuses';

@Injectable({
    providedIn: "root"
})

export class InMemoryDataService implements InMemoryDbService {

    createDb() {
        return { certainty, location, status, seniority, serviceline, positionstatus };
    }
}
