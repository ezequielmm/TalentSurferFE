import { Role } from '../role/role';

export interface User {
    id: number;
    userName: string;
    email: string;
    role: Role;
    archivingFlag: boolean;
}
