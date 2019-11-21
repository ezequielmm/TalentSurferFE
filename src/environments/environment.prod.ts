const baseUrl = 'https://localhost:44338/';
export const environment = {
  production: true,
  baseUrl,
  loginUrl: `${baseUrl}api/user/loginGoogle`,
  certaintyUrl: `${baseUrl}api/certainty`,
  locationUrl: `${baseUrl}api/location`,
  statusUrl: `${baseUrl}api/status`,
  seniorityUrl: `${baseUrl}api/seniority`,
  serviceLineUrl: `${baseUrl}api/serviceLine`,
  positionStatusUrl: `${baseUrl}api/positionstatus`,
  sowUrl: `${baseUrl}api/sow`,
  opportunityUrl: `${baseUrl}api/opportunity`,
  positionUrl: `${baseUrl}api/position`,
  projectUrl: `${baseUrl}api/project`
};
