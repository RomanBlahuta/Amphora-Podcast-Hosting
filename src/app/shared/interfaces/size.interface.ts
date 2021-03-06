import {UnitsOfMeasurementEnum} from '../enums/units-of-measurement.enum';

export interface ISize {
    width?: number;
    height?: number;
    widthUnit?: UnitsOfMeasurementEnum;
    heightUnit?: UnitsOfMeasurementEnum;
    widthDiff?: number;
    heightDiff?: number;
    widthDiffUnit?: UnitsOfMeasurementEnum;
    heightDiffUnit?: UnitsOfMeasurementEnum;
}
