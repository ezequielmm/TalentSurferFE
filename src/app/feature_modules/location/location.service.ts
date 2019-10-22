import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable, of } from 'rxjs';
import { environment } from "../../../environments/environment";
import { Location } from './location';

@Injectable({
    providedIn: "root"
})

export class LocationService {

    constructor(private http: HttpClient) { }

    getLocations(): Observable<Location[]> {
        return this.http.get<Location[]>(environment.locationUrl);
    }

    createLocation(location: Location): Observable<Location> {
        return this.http.post<Location>(environment.locationUrl, location);
    }

    updateLocation(location: Location): Observable<Location> {
        return this.http.put<Location>(`${environment.locationUrl}/${location.id}`, location);
    }
}
