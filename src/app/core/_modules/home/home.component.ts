import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from 'src/app/shared/services/auth.service';
import { HomeService } from './home.service';
import { ReadUser } from 'src/app/_model/security/read-user';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  accessLevel: number;
  admins: ReadUser[];

  constructor(private route: ActivatedRoute,
              private authService: AuthService,
              private homeService: HomeService) { }

  ngOnInit() {
    const authToken = this.route.snapshot.queryParams.token;
    const refreshToken = this.route.snapshot.queryParams.refreshToken;
    if (authToken) {
      this.authService.setAuthToken(authToken, refreshToken);
      this.accessLevel = this.authService.getAccessLevel();
      this.getAdmins();
    }
  }

  private getAdmins() {
    this.homeService.getAdmins().subscribe(admins => this.admins = admins);
  }
}
