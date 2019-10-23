import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { environment } from '../../../environments/environment';
import { Sow } from './sow';

@Injectable({
    providedIn: 'root'
})

export class SowService {

    constructor(private http: HttpClient) { }

    getSows(): Observable<Sow[]> {
        return this.http.get<Sow[]>(environment.sowUrl);
    }

    createSow(sow: Sow): Observable<Sow> {
        return this.http.post<Sow>(environment.sowUrl, sow);
    }

    updateSow(sow: Sow): Observable<Sow> {
        return this.http.put<Sow>(`${environment.sowUrl}/${sow.id}`, sow);
    }
}
