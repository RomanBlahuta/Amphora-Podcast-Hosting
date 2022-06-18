import {Component, Input, OnInit} from '@angular/core';
import {AmphoraEpisodeCardModel} from './amphora-episode-card.model';
import {AmphoraButtonModel} from '../../common/amphora-button/amphora-button.model';
import {AmphoraSeriesTagModel} from '../../common/amphora-series-tag/amphora-series-tag.model';
import {ButtonColorsEnum, ButtonTypesEnum} from '../../../shared/enums/component-types/button-types.enum';
import {fadeInOutAnimation} from '../../../shared/animations/fade-in-out.animation';
import {AmphoraAudioPlayerModel} from '../../common/amphora-audio-player/amphora-audio-player.model';

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
    public audioPlayerModel: AmphoraAudioPlayerModel;

    constructor() { }

    public ngOnInit(): void {
        this.audioPlayerModel = AmphoraAudioPlayerModel.create(this.model.optional.audio);

        this.overlayButtonModels = [
            AmphoraButtonModel.create('Edit', {
                buttonType: ButtonTypesEnum.OUTLINED,
                buttonColor: ButtonColorsEnum.WHITE,
                size: {
                    width: 144,
                    height: 40,
                },
                onClick: this.onEdit.bind(this),
            }),

            AmphoraButtonModel.create('Delete', {
                buttonType: ButtonTypesEnum.OUTLINED,
                buttonColor: ButtonColorsEnum.WHITE,
                size: {
                    width: 144,
                    height: 40,
                },
                onClick: this.onDelete.bind(this),
            }),
        ];

        this.seriesModel = AmphoraSeriesTagModel.create(this.model.optional.series, {
            onClick: this.model.optional.onSeriesTagClick,
            active$: this.model.optional.isSeriesActive$,
        });
    }

    public changeShowOverlay(value: boolean) {
        this.showOverlay = value;
    }

    private onEdit(): void {
        if (this.model.optional.onEdit) {
            this.model.optional.onEdit();
        }
    }

    private onDelete(): void {
        if (this.model.optional.onDelete) {
            this.model.optional.onDelete();
        }
    }
}
