import {Component, Input, OnInit} from '@angular/core';
import {AmphoraHeaderModel} from '../amphora-header/amphora-header.model';
import {UnitsOfMeasurementEnum} from '../../../shared/enums/units-of-measurement.enum';

@Component({
  selector: 'amphora-page',
  templateUrl: './amphora-page.component.html',
  styleUrls: ['./amphora-page.component.scss'],
})
export class AmphoraPageComponent implements OnInit {
    @Input()
    public headerModel: AmphoraHeaderModel;
    public UnitsOfMeasurementEnum = UnitsOfMeasurementEnum;

    constructor() { }

    public ngOnInit(): void {}

}
