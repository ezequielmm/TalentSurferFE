import { PositionStatus } from '../feature_modules/position-status/position-status';

export const POSITIONSTATUSES: PositionStatus[] = [
  {
    id: 1, description: "Waiting for Feedback", archivingFlag: false, comments: ""
  },
  {
    id: 2, description: "On Hold", archivingFlag: false, comments: ""
  },
  {
    id: 3, description: "Lost", archivingFlag: false, comments: ""
  },
  {
    id: 4, description: "Won", archivingFlag: false, comments: ""
  }
];

