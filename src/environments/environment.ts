// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const baseUrl = 'https://localhost:44338/';
export const environment = {
  production: false,
  baseUrl,
  loginUrl: baseUrl + 'api/User/LoginGoogle',
  certaintyUrl: 'api/certainty',
  locationUrl: 'api/location',
  statusUrl: 'api/status',
  seniorityUrl: 'api/seniority',
  serviceLineUrl: 'api/serviceline',
  positionStatusUrl: 'api/positionstatus',
  sowUrl: 'api/sow',
  opportunityUrl: 'api/opportunity',
  positionUrl: 'api/position',
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
