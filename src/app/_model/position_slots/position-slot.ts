import { Position } from 'src/app/feature_modules/position/position';
import { Seniority } from 'src/app/feature_modules/seniority/seniority';
import { Status } from 'src/app/feature_modules/status/status';
import { Location } from 'src/app/feature_modules/location/location';

export interface PositionSlot {
    id: number;
    additionalLocations: Location[];
    glober: string;
    globerEmail: string;
    nonGlober: string;
    nonGloberEmail: string;
    position: Position;
    seniority: Seniority;
    location: Location;
    status: Status;
    candidateSeniority: Seniority;
    candidateLocation: Location;
    tickets: string;
}
