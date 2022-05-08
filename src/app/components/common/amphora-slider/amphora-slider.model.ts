import {ISliderOptions} from '../../../shared/interfaces/slider-options.interface';
import {Observable} from 'rxjs';

export interface IOptional {
    onClickPrevious?: (currentSlide: number) => void;
    onClickNext?: (currentSlide: number) => void;
    options?: ISliderOptions;
}

export class AmphoraSliderModel {
    public slideController: Observable<number>;
    public optional: IOptional;

    constructor(slideController: Observable<number>, optional?: IOptional) {
        this.slideController = slideController;

        this.optional = {
            onClickNext: optional?.onClickNext || undefined,
            onClickPrevious: optional?.onClickPrevious || undefined,
            options: optional?.options || {
                // allowTouchMove: false,
                loop: true,
                slidesPerView: 2,
            },
        };
    }

    public static create(slideController: Observable<number>, optional?: IOptional): AmphoraSliderModel {
        return new AmphoraSliderModel(slideController, optional);
    }
}
