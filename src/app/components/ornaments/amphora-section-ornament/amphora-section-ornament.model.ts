import {DirectionsEnum} from '../../../shared/enums/directions.enum';

export class AmphoraSectionOrnamentModel {
    public direction: DirectionsEnum;

    constructor(direction: DirectionsEnum) {
        this.direction = direction;
    }

    public static create(direction: DirectionsEnum): AmphoraSectionOrnamentModel {
        return new AmphoraSectionOrnamentModel(direction);
    }
}
