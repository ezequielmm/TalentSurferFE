import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable, of } from 'rxjs';
import { environment } from "../../../environments/environment";
import { ServiceLine } from './service-line';

@Injectable({
    providedIn: "root"
})

export class ServiceLineService {

    constructor(private http: HttpClient) { }

    getServiceLines(): Observable<ServiceLine[]> {
        return this.http.get<ServiceLine[]>(environment.serviceLineUrl);
    }

    createServiceLine(serviceLine: ServiceLine): Observable<ServiceLine> {
        return this.http.post<ServiceLine>(environment.serviceLineUrl, serviceLine);
    }

    updateServiceLine(serviceLine: ServiceLine): Observable<ServiceLine> {
        return this.http.put<ServiceLine>(`${environment.serviceLineUrl}/${serviceLine.id}`, serviceLine);
    }
}
