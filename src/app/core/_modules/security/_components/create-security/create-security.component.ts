import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';
import { SecurityService } from '../../security.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Role } from 'src/app/_model/role/role';

@Component({
  selector: 'app-create-security',
  templateUrl: './create-security.component.html',
  styleUrls: ['./create-security.component.scss']
})

export class CreateSecurityComponent implements OnInit {
  createUserForm: FormGroup;
  roles: Role[] = [];

  constructor(
    private dialogRef: MatDialogRef<CreateSecurityComponent>,
    private securityService: SecurityService,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit() {
    this.createUserForm = this.formBuilder.group({
      email: ['', Validators.required],
      role: [0, Validators.required],
      archivingFlag: [false]
    });
    this.getRoles();
  }

  getRoles() {
    this.securityService.getRoles().subscribe(
      response => this.roles = [...response],
      error => console.log(error)
    );
  }

  createUser() {
    this.securityService.createUser(this.securityService.mapCreateUser(this.createUserForm.value))
      .subscribe(
        res => this.closeDialog(),
        error => console.log(error)
      );
  }

  closeDialog() {
    this.dialogRef.close();
    return;
  }
}
