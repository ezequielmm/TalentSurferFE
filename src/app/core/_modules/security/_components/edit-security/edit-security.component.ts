import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';
import { SecurityService } from '../../security.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Role } from 'src/app/_model/role/role';

@Component({
  selector: 'app-edit-security',
  templateUrl: './edit-security.component.html',
  styleUrls: ['./edit-security.component.scss']
})

export class EditSecurityComponent implements OnInit {
  editSecurityForm: FormGroup;
  roles: Role[] = [];

  constructor(
    private dialogRef: MatDialogRef<EditSecurityComponent>,
    private securityService: SecurityService,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit() {
    this.editSecurityForm = this.formBuilder.group({
      id: [{ value: 0, disabled: true }, Validators.required],
      email: ['', Validators.required],
      role: [0, Validators.required],
      archivingFlag: [false]
    });
    console.log(this.dialogRef._containerInstance._config.data);
    this.editSecurityForm.patchValue(this.dialogRef._containerInstance._config.data);
    this.getRoles();
  }

  closeDialog() {
    this.dialogRef.close();
  }

  getRoles() {
    this.securityService.getRoles().subscribe(
      response => {
        this.roles = [...response];
        const selectedRole = this.roles.filter(role => role.id === this.editSecurityForm.controls.role.value)[0];
        this.editSecurityForm.controls.role.setValue(selectedRole);
      },
      error => {
        console.log(error);
      }
    );
  }

  editSecurity() {
    const user = this.editSecurityForm.getRawValue();
    this.securityService.updateUser(
      this.securityService.mapUpdateUser(user),
      user.id
    ).subscribe(
      res => {
        this.closeDialog();
      },
      error => console.log(error)
    );
  }

  compareFn(object1: Role, object2: Role): boolean {
    return object1 && object2 && object1.id === object2.id ? true : false;
  }
}
