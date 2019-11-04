import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from 'src/app/shared/services/auth.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

constructor(private route: ActivatedRoute,
            private authService: AuthService) { }

  ngOnInit() {
    const authToken = this.route.snapshot.queryParams.token;
    if (authToken) {
      this.authService.setAuthToken(authToken);
    }
  }

}
