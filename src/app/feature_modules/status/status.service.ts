import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable, of } from 'rxjs';
import { environment } from "../../../environments/environment";
import { Status } from './status';

@Injectable({
    providedIn: "root"
})

export class StatusService {

    constructor(private http: HttpClient) { }

    getStatuses(): Observable<Status[]> {
        return this.http.get<Status[]>(environment.statusUrl);
    }

    createStatus(status: Status): Observable<Status> {
        return this.http.post<Status>(environment.statusUrl, status);
    }

    updateStatus(status: Status): Observable<Status> {
        return this.http.put<Status>(`${environment.statusUrl}/${status.id}`, status);
    }
}
