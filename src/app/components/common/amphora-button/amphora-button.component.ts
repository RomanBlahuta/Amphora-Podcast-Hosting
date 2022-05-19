import {Component, Input, OnInit} from '@angular/core';
import {AmphoraButtonModel} from './amphora-button.model';
import {ButtonColorsEnum, ButtonTypesEnum} from '../../../shared/enums/component-types/button-types.enum';
import {ColorsAlphaEnum} from '../../../shared/enums/colors.enum';

@Component({
  selector: 'amphora-button',
  templateUrl: './amphora-button.component.html',
  styleUrls: ['./amphora-button.component.scss'],
})
export class AmphoraButtonComponent implements OnInit {
    @Input()
    public model: AmphoraButtonModel;
    public ButtonTypesEnum = ButtonTypesEnum;
    public ButtonColorsEnum = ButtonColorsEnum;
    public ColorsTransparentEnum = ColorsAlphaEnum;

    constructor() { }

    public ngOnInit(): void {}

    public onClick() {
        if (this.model.optional.onClick) {
            this.model.optional.onClick();
        }
    }

}
