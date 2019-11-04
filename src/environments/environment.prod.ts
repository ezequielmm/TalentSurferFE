const baseUrl = 'https://localhost:44338/';
export const environment = {
  production: true,
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
  positionUrl: 'api/position'
};
