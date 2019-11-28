import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MatDatepickerInputEvent } from '@angular/material';
import { Certainty } from '../../../certainty/certainty';
import { Sow } from '../../../sow/sow';
import { ServiceLine } from '../../../service-line/service-line';
import { Location } from '../../../location/location';
import { Project } from '../../../project/project';
import { Status } from '../../../status/status';
import { OpportunityService } from '../../opportunity.service';
import { CertaintyService } from '../../../certainty/certainty.service';
import { SowService } from '../../../sow/sow.service';
import { ServiceLineService } from '../../../service-line/service-line.service';
import { ProjectService } from '../../../project/project.service';
import { LocationService } from '../../../location/location.service';
import { StatusService } from '../../../status/status.service';
import * as moment from 'moment';

@Component({
  selector: 'app-add-opportunity',
  templateUrl: './add-opportunity.component.html',
  styleUrls: ['./add-opportunity.component.scss']
})
export class AddOpportunityManagementComponent implements OnInit {
  addOpportunityForm: FormGroup;
  displayedColumns: string[] = [
    'Position',
    'Needed Seniority',
    'Primary Location',
    'Addtional Location',
    'Status'
  ];
  loading: boolean = false;
  projects: Project[];
  certainties: Certainty[];
  sows: Sow[];
  statuses: Status[];
  serviceLines: ServiceLine[];
  locations: Location[];
  durationDate: string = '0 Month';
  minRequestedOnDate: Date = moment().toDate();
  minStartDate: Date = moment().toDate();
  minEndDate: Date = moment().toDate();
  submitForm: boolean;

  constructor(
    private opportunityService: OpportunityService,
    private certaintyService: CertaintyService,
    private sowService: SowService,
    private serviceLineService: ServiceLineService,
    private projectService: ProjectService,
    private locationService: LocationService,
    private statusService: StatusService,
    private formBuilder: FormBuilder,
    private router: Router
  ) { }

  ngOnInit() {
    this.formInit();
    this.getCertainties();
    this.getSows();
    this.getServiceLines();
    this.getProjects();
    this.getLocations();
    this.getStatuses();
  }

  private getCertainties() {
    this.certaintyService
      .getCertainties()
      .subscribe(
        certainties => (this.certainties = certainties.filter(certainty => !certainty.archivingFlag)),
        error => console.log(error)
      );
  }

  private getSows() {
    this.sowService
      .getSows()
      .subscribe(sows => (this.sows = sows.filter(sow => !sow.archivingFlag)),
        error => console.log(error));
  }

  private getStatuses() {
    this.statusService
      .getStatuses()
      .subscribe(statuses => (this.statuses = statuses.filter(status => !status.archivingFlag)),
        error => console.log(error));
  }

  private getServiceLines() {
    this.serviceLineService
      .getServiceLines()
      .subscribe(
        serviceLines => (this.serviceLines = serviceLines.filter(serviceLine => !serviceLine.archivingFlag)),
        error => console.log(error)
      );
  }

  private getProjects() {
    this.projectService
      .getProjects()
      .subscribe(
        projects => (this.projects = projects.filter(project => !project.archivingFlag)),
        error => console.log(error)
      );
  }

  private getLocations() {
    this.locationService
      .getLocations()
      .subscribe(
        locations => (this.locations = locations.filter(location => !location.archivingFlag)),
        error => console.log(error)
      );
  }

  private formInit() {
    this.addOpportunityForm = this.formBuilder.group({
      id: [undefined],
      name: ['', Validators.required],
      product: [''],
      project: ['', Validators.required],
      hiringManager: [''],
      owner: ['', Validators.required],
      certainty: ['', Validators.required],
      primaryLocation: ['', Validators.required],
      proposalFolder: [''],
      sow: [''],
      eyId: [''],
      serviceLine: ['', Validators.required],
      requestedByName: ['', Validators.required],
      requestedByEmail: [''],
      requestedOn: ['', Validators.required],
      contact: [''],
      startDate: ['', Validators.required],
      endDate: ['', Validators.required],
      duration: [''],
      additionalLocations: [''],
      status: ['']
    });
  }

  displayValue(obj) {
    return obj && obj.description
      ? obj.description
      : obj && obj.name
        ? obj.name
        : obj;
  }

  addOpportunity() {
    this.submitForm = true;
    this.opportunityService
      .addOpportunity(this.opportunityService.mapOpportunity(this.addOpportunityForm.value))
      .subscribe(
        () => this.router.navigate(['/opportunity']),
        error => console.log(error)
      );
  }

  showLoader(isSpinnerVisible: boolean) {
    this.loading = isSpinnerVisible;
  }

  dateLowerThanToday() {
    const dateEntered = new Date(
      this.addOpportunityForm.controls.requestedOn.value
    ).getTime();
    const today = new Date().getTime();
    return dateEntered < today;
  }

  updateStartDate(event: MatDatepickerInputEvent<Date>) {
    this.minStartDate = event.value;
    this.minEndDate = event.value;
  }

  updateEndDate(event: MatDatepickerInputEvent<Date>) {
    this.minEndDate = event.value;
  }

  opportunityDuration(event: MatDatepickerInputEvent<Date>) {
    const start = moment(
      this.addOpportunityForm.value.startDate,
      'YYYY-MM-DD'
    );
    const end = moment(this.addOpportunityForm.value.endDate, 'YYYY-MM-DD');
    let dateCalculation = `${moment
      .duration(end.diff(start))
      .asMonths()
      .toFixed()}`;
    dateCalculation = (parseInt(dateCalculation, 10) > 1) ? `${dateCalculation} Months` : `${dateCalculation} Month`;
    this.addOpportunityForm.controls.duration.setValue(dateCalculation);
  }
}
