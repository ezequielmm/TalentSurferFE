import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable, of } from 'rxjs';
import { environment } from "../../../environments/environment";
import { Certainty } from './certainty';

@Injectable({
    providedIn: "root"
})

export class CertaintyService {

    constructor(private http: HttpClient) { }

    getCertainties(): Observable<Certainty[]> {
        return this.http.get<Certainty[]>(environment.certaintyUrl);
    }

    createCertainty(certainty: Certainty): Observable<Certainty> {
        return this.http.post<Certainty>(environment.certaintyUrl, certainty);
    }

    updateCertainty(certainty: Certainty): Observable<Certainty> {
        return this.http.put<Certainty>(`${environment.certaintyUrl}/${certainty.id}`, certainty);
    }
}
