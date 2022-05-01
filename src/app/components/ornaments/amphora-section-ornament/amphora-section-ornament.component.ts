import {Component, Input, OnInit} from '@angular/core';
import {AmphoraSectionOrnamentModel} from './amphora-section-ornament.model';
import {DirectionsEnum} from '../../../shared/enums/directions.enum';

@Component({
  selector: 'amphora-section-ornament',
  templateUrl: './amphora-section-ornament.component.html',
  styleUrls: ['./amphora-section-ornament.component.scss'],
})
export class AmphoraSectionOrnamentComponent implements OnInit {
    @Input()
    public model: AmphoraSectionOrnamentModel;
    public DirectionsEnum = DirectionsEnum;

    constructor() { }

    public ngOnInit(): void {}

}
