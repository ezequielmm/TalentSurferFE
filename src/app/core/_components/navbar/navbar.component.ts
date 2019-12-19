import { Component, ViewEncapsulation, NgZone, OnInit } from '@angular/core';
import { AuthService } from '../../../shared/services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  encapsulation: ViewEncapsulation.None,
})

export class NavbarComponent implements OnInit {

  isUserSignedIn: boolean;
  userProfileImage: string;
  userProfileName: string;
  accessLevel: number;

  navLinks = [
    {
      link: 'certainty',
      name: 'Certainty'
    },
    {
      link: 'location',
      name: 'Location'
    },
    {
      link: 'position',
      name: 'Position'
    },
    {
      link: 'position-status',
      name: 'Positions Status'
    },
    {
      link: 'project',
      name: 'Project'
    },
    {
      link: 'seniority',
      name: 'Seniority'
    },
    {
      link: 'service-line',
      name: 'Service Line'
    },
    {
      link: 'sow',
      name: 'SOW'
    },
    {
      link: 'status',
      name: 'Progress (Status)'
    }
  ];

  constructor(
    private authService: AuthService,
    private ngZone: NgZone
  ) { }

  ngOnInit() {
    this.navLinks.sort((a, b) => a.name.localeCompare(b.name));
    this.authService.isSignedInListener.subscribe(
      isUserSingedIn => {
        this.ngZone.run(() => {
          this.isUserSignedIn = isUserSingedIn;
          const token = this.authService.getUserInfoFromToken();
          this.userProfileName = (token) ? token.nameid : null;
          this.accessLevel = this.authService.getAccessLevel();
        });
      },
      error => console.error(error)
    );
  }

  signOut() {
    this.authService.signOut().subscribe(res => this.authService.signIn());
  }
}
