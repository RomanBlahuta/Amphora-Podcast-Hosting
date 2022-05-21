import {Component, Input, OnInit} from '@angular/core';
import {AmphoraEpisodeCardModel} from './amphora-episode-card.model';
import {AmphoraButtonModel} from '../../common/amphora-button/amphora-button.model';
import {AmphoraSeriesTagModel} from '../../common/amphora-series-tag/amphora-series-tag.model';
import {ButtonColorsEnum, ButtonTypesEnum} from '../../../shared/enums/component-types/button-types.enum';
import {fadeInOutAnimation} from '../../../shared/animations/fade-in-out.animation';

@Component({
    selector: 'amphora-episode-card',
    templateUrl: './amphora-episode-card.component.html',
    styleUrls: ['./amphora-episode-card.component.scss'],
    animations: [fadeInOutAnimation],
})
export class AmphoraEpisodeCardComponent implements OnInit {
    @Input()
    public model: AmphoraEpisodeCardModel;
    public overlayButtonModels: AmphoraButtonModel[];
    public seriesModel: AmphoraSeriesTagModel;
    public showOverlay = false;

    constructor() { }

    public ngOnInit(): void {
        this.overlayButtonModels = [
            AmphoraButtonModel.create('Edit', {
                buttonType: ButtonTypesEnum.OUTLINED,
                buttonColor: ButtonColorsEnum.WHITE,
                size: {
                    width: 144,
                    height: 40,
                },
                onClick: () => 'Edit Episode',
            }),

            AmphoraButtonModel.create('Delete', {
                buttonType: ButtonTypesEnum.OUTLINED,
                buttonColor: ButtonColorsEnum.WHITE,
                size: {
                    width: 144,
                    height: 40,
                },
                onClick: () => 'Delete Episode',
            }),
        ];

        this.seriesModel = AmphoraSeriesTagModel.create('Series #1', {
            onClick: () => console.log('Filter by series'),
        });
    }

    public changeShowOverlay(value: boolean) {
        this.showOverlay = value;
    }
}
