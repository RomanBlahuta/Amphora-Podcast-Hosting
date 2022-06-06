import {Component, OnInit} from '@angular/core';
import {UnitsOfMeasurementEnum} from '../../../shared/enums/units-of-measurement.enum';

@Component({
  selector: 'amphora-page',
  templateUrl: './amphora-page.component.html',
  styleUrls: ['./amphora-page.component.scss'],
})
export class AmphoraPageComponent implements OnInit {
    public UnitsOfMeasurementEnum = UnitsOfMeasurementEnum;

    constructor() { }

    public ngOnInit(): void {}

}
