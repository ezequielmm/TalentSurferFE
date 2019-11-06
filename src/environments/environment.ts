// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const baseUrl = 'https://localhost:44338/';
export const environment = {
  production: false,
  baseUrl,
  loginUrl: baseUrl + 'api/user/loginGoogle',
  certaintyUrl: baseUrl + 'api/certainty',
  locationUrl: baseUrl + 'api/location',
  statusUrl: baseUrl + 'api/status',
  seniorityUrl: baseUrl + 'api/seniority',
  serviceLineUrl: baseUrl + 'api/serviceLine',
  positionStatusUrl: baseUrl + 'api/positionstatus',
  sowUrl: baseUrl + 'api/sow',
  opportunityUrl: baseUrl + 'api/opportunity',
  positionUrl: baseUrl + 'api/position',
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
