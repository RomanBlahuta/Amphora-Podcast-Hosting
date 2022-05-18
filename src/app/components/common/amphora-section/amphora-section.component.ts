import {Component, Input, OnInit} from '@angular/core';
import {AmphoraSectionModel} from './amphora-section.model';
import {AmphoraSectionOrnamentModel} from '../../ornaments/amphora-section-ornament/amphora-section-ornament.model';
import {DirectionsEnum} from '../../../shared/enums/directions.enum';
import {SectionOrnamentTypesEnum} from '../../../shared/enums/component-types/section-types.enum';

@Component({
  selector: 'amphora-section',
  templateUrl: './amphora-section.component.html',
  styleUrls: ['./amphora-section.component.scss'],
})
export class AmphoraSectionComponent implements OnInit {
    @Input()
    public model: AmphoraSectionModel;
    public ornamentLeftModel: AmphoraSectionOrnamentModel;
    public ornamentRightModel: AmphoraSectionOrnamentModel;
    public SectionOrnamentTypesEnum = SectionOrnamentTypesEnum;

    constructor() { }

    public ngOnInit(): void {
        this.ornamentLeftModel = AmphoraSectionOrnamentModel.create(DirectionsEnum.LEFT);
        this.ornamentRightModel = AmphoraSectionOrnamentModel.create(DirectionsEnum.RIGHT);
    }
}
