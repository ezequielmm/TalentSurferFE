import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ReadUser } from 'src/app/_model/security/read-user';


@Injectable({
    providedIn: 'root'
})

export class HomeService {

    constructor(private http: HttpClient) { }

    getAdmins(): Observable<ReadUser[]> {
        return this.http.get<ReadUser[]>(`${environment.userUrl}/admins`);
    }
}
