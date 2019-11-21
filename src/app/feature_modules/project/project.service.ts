import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { environment } from '../../../environments/environment';
import { Project } from './project';

@Injectable({
    providedIn: 'root'
})

export class ProjectService {

    constructor(private http: HttpClient) { }

    getProjects(): Observable<Project[]> {
        return this.http.get<Project[]>(environment.projectUrl);
    }

    createProject(project: Project): Observable<Project> {
        return this.http.post<Project>(environment.projectUrl, project);
    }

    updateProject(project: Project): Observable<Project> {
        return this.http.put<Project>(`${environment.projectUrl}/${project.id}`, project);
    }
}
