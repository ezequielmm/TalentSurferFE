import { Component, ViewEncapsulation, OnInit } from '@angular/core';
import { ActivatedRoute, Router, NavigationEnd, PRIMARY_OUTLET } from '@angular/router';
import { Breadcrumb } from '../../_models/breadcrumb.model';
import { filter } from 'rxjs/operators';
import { isNullOrUndefined } from 'util';

@Component({
  selector: 'app-breadcrumb',
  templateUrl: './breadcrumb.component.html',
  styleUrls: ['./breadcrumb.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class BreadcrumbComponent implements OnInit {

  breadcrumbList: Breadcrumb[];

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    ) {
      this.breadcrumbList = [];
  }

  ngOnInit(): void {
    this.router.events
    .pipe(filter(event => event instanceof NavigationEnd))
    .subscribe( event => this.breadcrumbList = this.createBreadcrumbs(this.activatedRoute.root));
  }

  private createBreadcrumbs(route: ActivatedRoute, url: string = '', breadcrumbs: Breadcrumb[] = []) {
    const ROUTE_DATA_BREADCRUMB = 'breadcrumb';

    const children: ActivatedRoute[] = route.children;

    if (children.length === 0) {
      return breadcrumbs;
    }

    for (const child of children) {
      if (child.outlet !== PRIMARY_OUTLET) {
        continue;
      }

      const routeURL: string = child.snapshot.url.map(segment => {
        return segment.path;
      }).join('/');

      if (routeURL !== '') {
        url += `/${routeURL}`;
      }

      const label = child.snapshot.data[ROUTE_DATA_BREADCRUMB];
      const params = child.snapshot.params;

      if (!isNullOrUndefined(label)) {
        breadcrumbs.push({ label, params, url });
      }

      return this.createBreadcrumbs(child, url, breadcrumbs);
    }

  }
}
