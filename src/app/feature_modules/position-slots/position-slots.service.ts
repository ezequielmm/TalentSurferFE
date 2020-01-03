import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { environment } from '../../../environments/environment';
import { ReadPositionSlot, UpdatePositionSlot, CreatePositionSlot } from './position-slots';

import { PositionService } from 'src/app/feature_modules/position/position.service';
import { Position } from 'src/app/feature_modules/position/position';
import { SeniorityService } from 'src/app/feature_modules/seniority/seniority.service';
import { Seniority } from 'src/app/feature_modules/seniority/seniority';
import { StatusService } from 'src/app/feature_modules/status/status.service';
import { Status } from 'src/app/feature_modules/status/status';
import { LocationService } from 'src/app/feature_modules/location/location.service';
import { Location } from 'src/app/feature_modules/location/location';
import { PositionSlot } from 'src/app/_model/position_slots/position-slot';

@Injectable({
    providedIn: 'root'
})

export class PositionSlotsService {

    constructor(private http: HttpClient,
                private locationService: LocationService,
                private positionService: PositionService,
                private seniorityService: SeniorityService,
                private statusService: StatusService) { }

    getLocations(): Observable<Location[]> {
        return this.locationService.getLocations();
    }

    getLocationById(locationId: number): Observable<Location> {
        return this.locationService.getLocationById(locationId);
    }

    getPositions(): Observable<Position[]> {
        return this.positionService.getPositions();
    }

    getPositionById(positionId: number): Observable<Position> {
        return this.positionService.getPositionById(positionId);
    }

    getSeniorities(): Observable<Seniority[]> {
        return this.seniorityService.getSeniorities();
    }

    getSeniorityById(seniorityId: number): Observable<Seniority> {
        return this.seniorityService.getSeniorityById(seniorityId);
    }

    getStatuses(): Observable<Status[]> {
        return this.statusService.getStatuses();
    }

    getStatusById(statusId: number): Observable<Status> {
        return this.statusService.getStatusById(statusId);
    }

    getPositionSlots(): Observable<ReadPositionSlot[]> {
        return this.http.get<ReadPositionSlot[]>(environment.positionSlotUrl);
    }

    getPositionSlotById(positionSlot: number): Observable<ReadPositionSlot> {
        return this.http.get<ReadPositionSlot>(`${environment.positionSlotUrl}/${positionSlot}`);
    }

    getOpportunityById(id: number) {
        return this.http.get<ReadPositionSlot>(`${environment.positionSlotUrl}/${id}`);
    }

    createPositionSlot(positionSlot: CreatePositionSlot): Observable<CreatePositionSlot> {
        return this.http.post<CreatePositionSlot>(environment.positionSlotUrl, positionSlot);
    }

    updatePositionSlot(positionSlot: UpdatePositionSlot): Observable<UpdatePositionSlot> {
        return this.http.put<UpdatePositionSlot>(`${environment.positionSlotUrl}/${positionSlot.id}`, positionSlot);
    }

    findById(list: any[], id: number) {
        return list.filter(listItem => listItem.id === id);
    }

    findByIds(list: any[], ids: number[]) {
        const selectedIds = [];
        ids.forEach(id => selectedIds.push(list.filter(listItem => listItem.id === id)[0]));
        return selectedIds;
    }

    mapPositionSlot(positionSlotFormValue: PositionSlot): CreatePositionSlot {
        const positionSlotObj: any = Object.assign({}, positionSlotFormValue);
        const additionalLocations = positionSlotObj.additionalLocations;
        positionSlotObj.positionId = (positionSlotObj.position) ? positionSlotObj.position.id : null;
        positionSlotObj.seniorityId = (positionSlotObj.seniority) ? positionSlotObj.seniority.id : null;
        positionSlotObj.locationId = (positionSlotObj.primaryLocation) ? positionSlotObj.primaryLocation.id : null;
        positionSlotObj.additionalLocationsIds = (additionalLocations.length) ? additionalLocations.map(location => location.id) : [];
        positionSlotObj.candidateSeniorityId = (positionSlotObj.candidateSeniority) ? positionSlotObj.candidateSeniority.id : null;
        positionSlotObj.candidateLocationId = (positionSlotObj.candidateLocation) ? positionSlotObj.candidateLocation.id : null;
        positionSlotObj.postionStatusId = (positionSlotObj.status) ? positionSlotObj.status.id : null;
        return positionSlotObj;
    }

    mapUpdatePositionSlot(editPositionSlotFormValue: PositionSlot): UpdatePositionSlot {
        const positionSlotObj: any = {};
        const additionalLocations = editPositionSlotFormValue.additionalLocations;
        const candidateSeniority = editPositionSlotFormValue.candidateSeniority;
        const candidateLocation = editPositionSlotFormValue.candidateLocation;
        positionSlotObj.glober = (editPositionSlotFormValue.glober) ? editPositionSlotFormValue.glober : null;
        positionSlotObj.globerEmail = (editPositionSlotFormValue.globerEmail) ? editPositionSlotFormValue.globerEmail : null;
        positionSlotObj.nonGlober = (editPositionSlotFormValue.nonGlober) ? editPositionSlotFormValue.nonGlober : null;
        positionSlotObj.nonGloberEmail = (editPositionSlotFormValue.nonGloberEmail) ? editPositionSlotFormValue.nonGloberEmail : null;
        positionSlotObj.positionId = (editPositionSlotFormValue.position) ? editPositionSlotFormValue.position.id : null;
        positionSlotObj.seniorityId = (editPositionSlotFormValue.seniority) ? editPositionSlotFormValue.seniority.id : null;
        positionSlotObj.locationId = (editPositionSlotFormValue.location) ? editPositionSlotFormValue.location.id : null;
        positionSlotObj.additionalLocationsIds = (additionalLocations) ? additionalLocations.map(location => location.id) : [];
        positionSlotObj.candidateSeniorityId = (candidateSeniority) ? candidateSeniority.id : null;
        positionSlotObj.candidateLocationId = (candidateLocation) ? candidateLocation.id : null;
        positionSlotObj.postionStatusId = (editPositionSlotFormValue.status) ? editPositionSlotFormValue.status.id : null;
        positionSlotObj.tickets = (editPositionSlotFormValue.tickets) ? editPositionSlotFormValue.tickets : null;
        return positionSlotObj;
    }

    mapReadPositionSlots(
        readPositionSlots: ReadPositionSlot[],
        locations: Location[],
        seniorities: Seniority[],
        positions: Position[],
        statuses: Status[]
    ): PositionSlot[] {
        const positionSlots = [];
        readPositionSlots.forEach(readPositionSlot => {
            const positionSlot: any = {};
            const additionalLocations = readPositionSlot.additionalLocationsIds;
            positionSlot.candidateLocation = locations.filter(location => location.id === readPositionSlot.candidateLocationId)[0];
            positionSlot.candidateSeniority = seniorities.filter(seniority => seniority.id === readPositionSlot.candidateSeniorityId)[0];
            positionSlot.glober = readPositionSlot.glober;
            positionSlot.globerEmail = readPositionSlot.globerEmail;
            positionSlot.nonGlober = readPositionSlot.nonGlober;
            positionSlot.nonGloberEmail = readPositionSlot.nonGloberEmail;
            positionSlot.id = readPositionSlot.id;
            positionSlot.additionalLocations = (additionalLocations) ? this.getAdditionalLocations(additionalLocations, locations) : [];
            positionSlot.location = locations.filter(location => location.id === readPositionSlot.locationId)[0];
            positionSlot.position = positions.filter(postion => postion.id === readPositionSlot.positionId)[0];
            positionSlot.seniority = seniorities.filter(seniority => seniority.id === readPositionSlot.seniorityId)[0];
            positionSlot.status = statuses.filter(status => status.id === readPositionSlot.postionStatusId)[0];
            positionSlot.tickets = readPositionSlot.tickets;
            positionSlots.push(positionSlot);
        });
        return positionSlots;
    }

    private getAdditionalLocations(ids: number[], locations: Location[]): Location[] {
        const locationObj = [];
        ids.forEach(id => {
            locationObj.push(locations.filter(location => location.id === id)[0]);
        });
        return locationObj;
    }
}
