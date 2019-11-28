export class Opportunity {
    id: number;
    name: string;
    product: string;
    projectId: number;
    hiringManager: string;
    owner: string;
    certaintyId: number;
    totalFTEs: string;
    primaryLocationId: number;
    proposalFolder: string;
    sow: number;
    eyId: string;
    serviceLineId: number;
    requestedByName: string;
    requestedByEmail: string;
    requestedOn: Date;
    contact: string;
    startDate: Date;
    endDate: Date;
    duration: string;
    additionalLocationsIds: number[];
    mapId: number;
    statusId: number;
    originalOpptCopy: string;
    opportunityLog: string;
}
