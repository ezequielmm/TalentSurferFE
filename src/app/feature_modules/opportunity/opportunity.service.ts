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

    createOpportunity(opportunity: Opportunity): Observable<Opportunity> {
        return this.http.post<Opportunity>(environment.opportunityUrl, opportunity);
    }

    updateOpportunity(opportunity: Opportunity): Observable<Opportunity> {
        return this.http.put<Opportunity>(`${environment.opportunityUrl}/${opportunity.id}`, opportunity);
    }
}
