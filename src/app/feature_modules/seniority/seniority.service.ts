import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable, of } from 'rxjs';
import { environment } from "../../../environments/environment";
import { Seniority } from './seniority';

@Injectable({
    providedIn: "root"
})

export class SeniorityService {

    constructor(private http: HttpClient) { }

    getSeniorities(): Observable<Seniority[]> {
        return this.http.get<Seniority[]>(environment.seniorityUrl);
    }

    createSeniority(seniority: Seniority): Observable<Seniority> {
        return this.http.post<Seniority>(environment.seniorityUrl, seniority);
    }

    updateSeniority(seniority: Seniority): Observable<Seniority> {
        return this.http.put<Seniority>(`${environment.seniorityUrl}/${seniority.id}`, seniority);
    }
}
