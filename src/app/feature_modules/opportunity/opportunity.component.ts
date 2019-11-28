import { Component, OnInit } from '@angular/core';
import { OpportunityService } from './opportunity.service';
import { Opportunity } from './opportunity';
import { MatDialog } from '@angular/material';
import { CONSTANTS } from '../../shared/constants/common.constants';

@Component({
  selector: 'app-opportunity',
  templateUrl: './opportunity.component.html',
  styleUrls: ['./opportunity.component.scss']
})

export class OpportunityComponent implements OnInit {
  displayedColumns: string[] = [
    'id',
    'name',
    'owner',
    'status',
    'startDate',
    'action'
  ];
  opportunities: Opportunity[] = [];
  loading: boolean = false;
  constants = CONSTANTS;

  constructor(
    private dialog: MatDialog,
    private opportunityService: OpportunityService
  ) { }

  openEditOpportunityModal(opportunity: Opportunity) {
  }

  ngOnInit() {
    this.getOpportunity();
  }

  getOpportunity() {
    this.showLoader(true);
    this.opportunityService.getOpportunities().subscribe(
      response => {
        this.opportunities = [...response];
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
