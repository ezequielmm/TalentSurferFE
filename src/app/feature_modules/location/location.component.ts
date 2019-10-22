import { Component, OnInit } from "@angular/core";
import { MatDialog } from '@angular/material/dialog';
import { EditLocationComponent } from './_components/edit-location/edit-location.component';
import { CreateLocationComponent } from './_components/create-location/create-location.component';
import { LocationService } from './location.service';
import { Location } from './location';

@Component({
  selector: "app-location",
  templateUrl: "./location.component.html",
  styleUrls: ["./location.component.scss"]
})

export class LocationComponent implements OnInit {

  displayedColumns: string[] = [
    'id',
    'order',
    'description',
    'archiving_flag',
    'comments',
    'action'
  ];
  locations: Location[] = [];
  loading: boolean = false;

  constructor(
    private dialog: MatDialog,
    private locationService: LocationService
  ) { }

  openDialog(): void {
    const dialogRef = this.dialog.open(CreateLocationComponent);
    dialogRef.afterClosed().subscribe(result => {
      this.getLocation();
    });
  }

  openEditLocationModal(location: Location) {
    const editmodal = this.dialog.open(EditLocationComponent, { data: location });
    editmodal.afterClosed().subscribe(result => {
      this.getLocation();
    });
  }

  ngOnInit() {
    this.getLocation();
  }

  getLocation() {
    this.showLoader(true);
    this.locationService.getLocations().subscribe(
      response => {
        this.locations = [...response];
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
