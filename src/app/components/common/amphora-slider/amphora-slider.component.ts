import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {IconsEnum} from '../../../shared/enums/icons.enum';
import {AmphoraSliderModel} from './amphora-slider.model';
import {IonSlides} from '@ionic/angular';

@Component({
  selector: 'amphora-slider',
  templateUrl: './amphora-slider.component.html',
  styleUrls: ['./amphora-slider.component.scss'],
})
export class AmphoraSliderComponent implements OnInit {
    @Input()
    public model: AmphoraSliderModel;

    @ViewChild('slider', {static: true})
    private slider: IonSlides;

    public IconsEnum = IconsEnum;
    public currentSlide: number;

    constructor() { }

    public ngOnInit(): void {
        if (this.model.slideController) {
            this.model.slideController.subscribe((slide) => {
                this.currentSlide = slide;
                this.slider.slideTo(this.currentSlide);
            });
        }
    }

    public onClickPrevious(): void {
        if (this.model.optional.onClickPrevious) {
            this.model.optional.onClickPrevious(this.currentSlide);
        }
        if (!this.model.slideController) {
            this.slider.slidePrev();
        }
    }

    public onClickNext(): void {
        if (this.model.optional.onClickNext) {
            this.model.optional.onClickNext(this.currentSlide);
        }
        if (!this.model.slideController) {
            this.slider.slideNext();
        }
    }

}
