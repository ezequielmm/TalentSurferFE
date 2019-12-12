import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { environment } from '../../../environments/environment';
import { Position } from './position';

@Injectable({
    providedIn: 'root'
})

export class PositionService {

    constructor(private http: HttpClient) { }

    getPositions(): Observable<Position[]> {
        return this.http.get<Position[]>(environment.positionUrl);
    }

    getPositionById(positionId: number): Observable<Position> {
        return this.http.get<Position>(`${environment.positionUrl}/${positionId}`);
    }

    createPosition(position: Position): Observable<Position> {
        return this.http.post<Position>(environment.positionUrl, position);
    }

    updatePosition(position: Position): Observable<Position> {
        return this.http.put<Position>(`${environment.positionUrl}/${position.id}`, position);
    }
}
