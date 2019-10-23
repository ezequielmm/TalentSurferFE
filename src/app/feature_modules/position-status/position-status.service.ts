import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable, of } from 'rxjs';
import { environment } from "../../../environments/environment";
import { PositionStatus } from './position-status';

@Injectable({
    providedIn: "root"
})

export class PositionStatusService {

    constructor(private http: HttpClient) { }

    getPositionStatuses(): Observable<PositionStatus[]> {
        return this.http.get<PositionStatus[]>(environment.positionStatusUrl);
    }

    createPositionStatus(positionStatus: PositionStatus): Observable<PositionStatus> {
        return this.http.post<PositionStatus>(environment.positionStatusUrl, positionStatus);
    }

    updatePositionStatus(positionStatus: PositionStatus): Observable<PositionStatus> {
        return this.http.put<PositionStatus>(`${environment.positionStatusUrl}/${positionStatus.id}`, positionStatus);
    }
}
