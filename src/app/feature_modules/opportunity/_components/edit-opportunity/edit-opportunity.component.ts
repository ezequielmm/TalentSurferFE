import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import * as moment from 'moment';
import { Router, ActivatedRoute } from '@angular/router';
import { Certainty } from '../../../certainty/certainty';
import { Sow } from '../../../sow/sow';
import { ServiceLine } from '../../../service-line/service-line';
import { Opportunity } from '../../opportunity';
import { Location } from '../../../location/location';
import { Status } from '../../../status/status';
import { OpportunityService } from '../../opportunity.service';
import { CertaintyService } from '../../../certainty/certainty.service';
import { SowService } from '../../../sow/sow.service';
import { ServiceLineService } from '../../../service-line/service-line.service';
import { MatDatepickerInputEvent } from '@angular/material';
import { LocationService } from '../../../location/location.service';
import { Project } from '../../../project/project';
import { ProjectService } from '../../../project/project.service';
import { StatusService } from '../../../status/status.service';
import { reject } from 'q';

@Component({
  selector: 'app-edit-opportunity',
  templateUrl: './edit-opportunity.component.html',
  styleUrls: ['./edit-opportunity.component.scss']
})

export class EditOpportunityManagementComponent implements OnInit {
  editOpportunityForm: FormGroup;
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
  cancelSubmit: boolean = false;
  durationDate: string = '0 Month';
  minRequestedOnDate: Date = moment().toDate();
  minStartDate: Date = moment().toDate();
  minEndDate: Date = moment().toDate();
  submitForm: boolean;
  opportunity: Opportunity;

  constructor(
    private opportunityService: OpportunityService,
    private certaintyService: CertaintyService,
    private sowService: SowService,
    private serviceLineService: ServiceLineService,
    private locationService: LocationService,
    private statusService: StatusService,
    private projectService: ProjectService,
    private formBuilder: FormBuilder,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.formInit();
    this.getOpotunityById();
  }

  private formInit() {
    this.editOpportunityForm = this.formBuilder.group({
      id: [{ value: '', disabled: true }],
      name: ['', Validators.required],
      product: [''],
      project: ['', Validators.required],
      hiringManager: [''],
      owner: ['', Validators.required],
      certainty: ['', Validators.required],
      primaryLocation: [[], Validators.required],
      proposalFolder: [''],
      sow: [''],
      eyId: [''],
      serviceLine: ['', Validators.required],
      requestedByName: ['', Validators.required],
      requestedByEmail: ['', Validators.required],
      requestedOn: ['', Validators.required],
      contact: [''],
      startDate: ['', Validators.required],
      endDate: ['', Validators.required],
      duration: [''],
      additionalLocations: [[]],
      status: ['']
    });
  }

  private getOpotunityById() {
    this.opportunityService
      .getOpportunityById(+this.route.snapshot.params['id'])
      .subscribe(
        (opportunity: any) => {
          this.opportunity = opportunity;
          this.editOpportunityForm.patchValue(opportunity);
          this.getCertainties();
          this.getSows();
          this.getServiceLines();
          this.getProjects();
          this.getLocations();
          this.getStatuses();
        },
        error => console.log(error)
      );
  }

  private getCertainties() {
    this.certaintyService
      .getCertainties()
      .subscribe(
        certainties => {
          this.certainties = certainties.filter(certainty => !certainty.archivingFlag);
          this.getCertaintiesById(this.opportunity.certaintyId);
        },
        error => console.log(error)
      );
  }

  private getCertaintiesById(certaintyId: number) {
    const selectedCertainty = this.opportunityService.findById(this.certainties, certaintyId);
    this.editOpportunityForm.controls.certainty.setValue(selectedCertainty[0]);
  }

  private getSows() {
    this.sowService
      .getSows()
      .subscribe(sows => {
        this.sows = sows.filter(sow => !sow.archivingFlag);
        this.getSowById(this.opportunity.sow);
      },
        error => console.log(error));
  }

  private getSowById(sowId: number) {
    const selectedSow = this.opportunityService.findById(this.sows, sowId);
    this.editOpportunityForm.controls.sow.setValue(selectedSow[0]);
  }

  private getStatuses() {
    this.statusService
      .getStatuses()
      .subscribe(statuses => {
        this.statuses = statuses.filter(status => !status.archivingFlag);
        this.getStatusById(this.opportunity.statusId);
      },
        error => console.log(error));
  }

  private getStatusById(statusId: number) {
    const selectedStatus = this.opportunityService.findById(this.statuses, statusId);
    this.editOpportunityForm.controls.status.setValue(selectedStatus[0]);
  }

  private getServiceLines() {
    this.serviceLineService
      .getServiceLines()
      .subscribe(
        serviceLines => {
          this.serviceLines = serviceLines.filter(serviceLine => !serviceLine.archivingFlag);
          this.getServiceLineById(this.opportunity.serviceLineId);
        },
        error => console.log(error)
      );
  }

  private getServiceLineById(serviceLineId: number) {
    const selectedServiceLine = this.opportunityService.findById(this.serviceLines, serviceLineId);
    this.editOpportunityForm.controls.serviceLine.setValue(selectedServiceLine[0]);
  }

  private getProjects() {
    this.projectService
      .getProjects()
      .subscribe(
        projects => {
          this.projects = projects.filter(project => !project.archivingFlag);
          this.getProjectById(this.opportunity.projectId);
        },
        error => console.log(error)
      );
  }

  private getProjectById(projectId: number) {
    const selectedProject = this.opportunityService.findById(this.projects, projectId);
    this.editOpportunityForm.controls.project.setValue(selectedProject[0]);
  }

  private getLocations() {
    this.locationService.getLocations().subscribe(
      locations => {
        this.locations = locations.filter(location => !location.archivingFlag);
        this.getPrimaryLocationById(this.opportunity.primaryLocationId);
        this.getAdditionalLocationsById(this.opportunity.additionalLocationsIds);
      },
      error => console.log(error)
    );
  }

  private getPrimaryLocationById(locationId: number) {
    const selectedPrimaryLocation = this.opportunityService.findById(this.locations, locationId);
    this.editOpportunityForm.controls.primaryLocation.setValue(selectedPrimaryLocation[0]);
  }

  private async getAdditionalLocationsById(locations: number[]) {
    let additionalLocation = [];
    additionalLocation = this.opportunityService.findByIds(this.locations, locations);
    this.editOpportunityForm.controls.additionalLocations.setValue(additionalLocation);
  }

  displayValue(obj) {
    return obj && obj.description
      ? obj.description
      : obj && obj.name
        ? obj.name
        : obj;
  }

  editOpportunity() {
    this.submitForm = true;
    this.opportunityService
      .updateOpportunity(this.opportunityService.mapOpportunity(this.editOpportunityForm.getRawValue()))
      .subscribe(() => this.router.navigate(['/opportunity']),
        error => console.log(error));
  }

  cancelOpportunityEdition() {
    return (this.cancelSubmit = true);
  }

  updateStartDate(event: MatDatepickerInputEvent<Date>) {
    this.minStartDate = event.value;
    this.minEndDate = event.value;
  }

  updateEndDate(event: MatDatepickerInputEvent<Date>) {
    this.minStartDate = event.value;
  }

  opportunityDuration(event: MatDatepickerInputEvent<Date>) {
    const start = moment(this.editOpportunityForm.value.startDate, 'YYYY-MM-DD');
    const end = moment(this.editOpportunityForm.value.endDate, 'YYYY-MM-DD');
    let dateCalculation = `${moment.duration(end.diff(start)).asMonths().toFixed().toString()}`;
    dateCalculation = (parseInt(dateCalculation, 10) > 1) ? `${dateCalculation} Months` : `${dateCalculation} Month`;
    this.editOpportunityForm.controls.duration.setValue(dateCalculation);
  }

  compareFn(object1: Location, object2: Location): boolean {
    return object1 && object2 && object1.id === object2.id ? true : false;
  }
}
