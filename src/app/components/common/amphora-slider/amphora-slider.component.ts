import {Component, Input, OnInit} from '@angular/core';
import {IconsEnum} from '../../../shared/enums/icons.enum';
import {ISliderOptions} from '../../../shared/interfaces/slider-options.interface';

@Component({
  selector: 'amphora-slider',
  templateUrl: './amphora-slider.component.html',
  styleUrls: ['./amphora-slider.component.scss'],
})
export class AmphoraSliderComponent implements OnInit {
    @Input()
    public options: ISliderOptions = {
        // allowTouchMove: false,
        loop: true,
        slidesPerView: 2,
    };

    public IconsEnum = IconsEnum;

    constructor() { }

    public ngOnInit(): void {}

    public onClickPrevious(): void {
        //
    }

    public onClickNext(): void {
        //
    }

}
