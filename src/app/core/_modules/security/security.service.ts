import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Role } from 'src/app/_model/role/role';
import { ReadUser } from 'src/app/_model/security/read-user';
import { User } from 'src/app/_model/security/user';
import { UpdateUser } from 'src/app/_model/security/update-user';
import { CreateUser } from 'src/app/_model/security/create-user';


@Injectable({
    providedIn: 'root'
})

export class SecurityService {

    constructor(private http: HttpClient) { }

    getUsers(): Observable<ReadUser[]> {
        return this.http.get<any[]>(environment.userUrl);
    }

    getRoles(): Observable<Role[]> {
        return this.http.get<any[]>(environment.roleUrl);
    }

    updateUser(user: UpdateUser, id: number): Observable<User> {
        return this.http.put<User>(`${environment.userUrl}/${id}`, user);
    }

    createUser(user: CreateUser): Observable<User> {
        return this.http.post<User>(`${environment.userUrl}`, user);
    }

    mapUpdateUser(user: User): UpdateUser {
        const updateUserObj: UpdateUser = { role: null, archivingFlag: null };
        updateUserObj.role = user.role.id;
        updateUserObj.archivingFlag = user.archivingFlag;
        return updateUserObj;
    }

    mapCreateUser(user: User): CreateUser {
        const createUserObj: CreateUser = {
            id: null,
            userName: null,
            email: null,
            role: null,
            archivingFlag: null
        };
        createUserObj.email = user.email;
        createUserObj.role = user.role.id;
        createUserObj.archivingFlag = user.archivingFlag;
        return createUserObj;
    }

}
