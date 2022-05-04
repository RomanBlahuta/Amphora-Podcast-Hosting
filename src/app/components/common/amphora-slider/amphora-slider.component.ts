import {Component, Input, OnInit} from '@angular/core';
import {IconsEnum} from '../../../shared/enums/icons.enum';

@Component({
  selector: 'amphora-slider',
  templateUrl: './amphora-slider.component.html',
  styleUrls: ['./amphora-slider.component.scss'],
})
export class AmphoraSliderComponent implements OnInit {
    @Input()
    public IconsEnum = IconsEnum;

    constructor() { }

    public ngOnInit(): void {}

}
