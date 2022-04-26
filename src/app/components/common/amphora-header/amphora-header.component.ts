import {Component, Input, OnInit} from '@angular/core';
import {AmphoraIconModel} from '../amphora-icon/amphora-icon.model';
import {IconsEnum} from '../../../shared/enums/icons.enum';
import {UnitsOfMeasurementEnum} from '../../../shared/enums/units-of-measurement.enum';

@Component({
  selector: 'amphora-header',
  templateUrl: './amphora-header.component.html',
  styleUrls: ['./amphora-header.component.scss'],
})
export class AmphoraHeaderComponent implements OnInit {
    @Input()
    public model: any;
    public logoModel: AmphoraIconModel;
    public headerOrnamentModel: AmphoraIconModel;

    constructor() { }

    public ngOnInit(): void {
        this.logoModel = this.createLogo();
        this.headerOrnamentModel = this.createHeaderOrnament();
    }

    private createLogo(): AmphoraIconModel {
        return AmphoraIconModel.create(IconsEnum.LOGO, {size: {width: 183, height: 40}});
    }

    private createHeaderOrnament(): AmphoraIconModel {
        return AmphoraIconModel.create(IconsEnum.HEADER_ORNAMENT, {size: {width: 100, widthUnit: UnitsOfMeasurementEnum.VW},});
    }
}
