import { Status } from '../feature_modules/status/status';

export const STATUSES: Status[] = [
  {
    id: 1, sortOrder: 1, description: "Waiting for Feedback", archivingFlag: false, comments: ""
  },
  {
    id: 2, sortOrder: 2, description: "On Hold", archivingFlag: false, comments: ""
  },
  {
    id: 3, sortOrder: 3, description: "Lost", archivingFlag: false, comments: ""
  },
  {
    id: 4, sortOrder: 4, description: "Won", archivingFlag: false, comments: ""
  }
];
