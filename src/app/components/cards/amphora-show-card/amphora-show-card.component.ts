import {Component, Input, OnInit} from '@angular/core';
import {AmphoraShowCardModel} from './amphora-show-card.model';
import {RoutesEnum} from '../../../shared/enums/routes.enum';

@Component({
  selector: 'amphora-show-card',
  templateUrl: './amphora-show-card.component.html',
  styleUrls: ['./amphora-show-card.component.scss'],
})
export class AmphoraShowCardComponent implements OnInit {
    @Input()
    public model: AmphoraShowCardModel;
    public RoutesEnum = RoutesEnum;

    constructor() { }

    public ngOnInit(): void {}

}
