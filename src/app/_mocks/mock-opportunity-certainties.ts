import { Certainty } from '../feature_modules/certainty/certainty';

export const CERTAINTIES: Certainty[] = [
  {
    id: 1, sortOrder: 1, description: "Lost", value: 0, archivingFlag: true, comments: ""
  },
  {
    id: 2, sortOrder: 2, description: "Forecast", value: 20, archivingFlag: true, comments: "",
  },
  {
    id: 3, sortOrder: 3, description: "Under Discussion", value: 40, archivingFlag: true, comments: "",
  },
  {
    id: 4, sortOrder: 4, description: "Proposal Sent", value: 60, archivingFlag: false, comments: "",
  },
  {
    id: 5, sortOrder: 5, description: "Sow Sent", value: 80, archivingFlag: true, comments: "",
  },
  {
    id: 6, sortOrder: 6, description: "Sow Approved", value: 100, archivingFlag: false, comments: "",
  }
];
