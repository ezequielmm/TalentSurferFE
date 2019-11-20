import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable, of } from 'rxjs';
import { environment } from "../../../environments/environment";
import { Project } from './project';

@Injectable({
    providedIn: "root"
})

export class ProjectService {

    constructor(private http: HttpClient) { }

    getProjects(): Observable<Project[]> {
        return this.http.get<Project[]>(environment.productUrl);
    }
}
