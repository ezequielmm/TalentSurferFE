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

  constructor(
    private authService: AuthService,
    private ngZone: NgZone
  ) { }

  ngOnInit() {
    this.authService.isSignedInListener.subscribe(
      isUserSingedIn => {
        this.ngZone.run(() => {
          this.isUserSignedIn = isUserSingedIn;
        });
      },
      error => console.error(error)
    );
  }

  signOut() {
    this.authService.signOut();
    this.authService.signIn();
  }
}
