import { Component, OnInit } from '@angular/core';
import { CONSTANTS } from 'src/app/shared/constants/common.constants';
import { SecurityService } from './security.service';
import { MatDialog } from '@angular/material/dialog';
import { Role } from 'src/app/_model/role/role';
import { ReadUser } from 'src/app/_model/security/read-user';
import { EditSecurityComponent } from './_components/edit-security/edit-security.component';
import { CreateSecurityComponent } from './_components/create-security/create-security.component';

@Component({
  selector: 'app-security',
  templateUrl: './security.component.html',
  styleUrls: ['./security.component.scss']
})
export class SecurityComponent implements OnInit {

  displayedColumns: string[] = [
    'id',
    'user_email',
    'role',
    'archiving_flag',
    'action'
  ];

  users: ReadUser[] = [];
  loading: boolean = false;
  constants = CONSTANTS;

  constructor(
    private securityService: SecurityService,
    private dialog: MatDialog) { }

    openCreateSecurityDialog(): void {
    const dialogRef = this.dialog.open(CreateSecurityComponent);
    dialogRef.afterClosed().subscribe(result => {
      this.getUsers();
    });
  }

  openEditSecurityModal(user: ReadUser) {
    const editmodal = this.dialog.open(EditSecurityComponent, { data: user });
    editmodal.afterClosed().subscribe(result => {
      this.getUsers();
    });
  }

  ngOnInit() {
    this.getUsers();
  }

  getUsers() {
    this.showLoader(true);
    this.securityService.getUsers().subscribe(
      response => {
        this.users = [...response];
        this.showLoader(false);
      },
      error => {
        console.log(error);
        this.showLoader(false);
      }
    );
  }

  showLoader(isSpinnerVisible) {
    this.loading = isSpinnerVisible;
  }

}
