import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { environment } from '../../../environments/environment';
import { Opportunity } from './opportunity';

@Injectable({
    providedIn: 'root'
})

export class OpportunityService {

    constructor(private http: HttpClient) { }

    getOpportunities(): Observable<Opportunity[]> {
        return this.http.get<Opportunity[]>(environment.opportunityUrl);
    }

    getOpportunityById(id: number){
        return this.http.get<Opportunity[]>(`${environment.opportunityUrl}/${id}`);
    }

    addOpportunity(opportunity: Opportunity): Observable<Opportunity> {
        return this.http.post<Opportunity>(environment.opportunityUrl, opportunity);
    }

    updateOpportunity(opportunity: Opportunity): Observable<Opportunity> {
        return this.http.put<Opportunity>(`${environment.opportunityUrl}/${opportunity.id}`, opportunity);
    }

    findById(list: any[], id: number) {
        return list.filter( listItem => listItem.id === id);
    }

    findByIds(list: any[], ids: number[]) {
        const selectedIds = [];
        ids.forEach( id => selectedIds.push(list.filter( listItem => listItem.id === id)[0]));
        return selectedIds;
    }

    mapOpportunity(opportunityFormValue): Opportunity {
        const opportunityObj = Object.assign({}, opportunityFormValue);
        const additionalLocations = opportunityObj.additionalLocations;
        opportunityObj.sow = (opportunityObj.sow) ? opportunityObj.sow.id : null;
        opportunityObj.serviceLineId = (opportunityObj.serviceLine) ? opportunityObj.serviceLine.id : null;
        opportunityObj.projectName = (opportunityObj.project) ? opportunityObj.project : null;
        opportunityObj.certaintyId = (opportunityObj.certainty) ? opportunityObj.certainty.id : null;
        opportunityObj.primaryLocationId = (opportunityObj.primaryLocation) ? opportunityObj.primaryLocation.id : [];
        opportunityObj.additionalLocationsIds = (additionalLocations.length ) ? additionalLocations.map( location => location.id) : [];
        opportunityObj.mapId = null;
        opportunityObj.originalOpptCopy = '';
        return opportunityObj;
    }
}
