import {Component, Input, OnInit} from '@angular/core';
import {AmphoraShowPreviewCardModel} from './amphora-show-preview-card.model';
import {AmphoraIconModel} from '../../common/amphora-icon/amphora-icon.model';
import {IconsEnum} from '../../../shared/enums/icons.enum';
import {AmphoraButtonModel} from '../../common/amphora-button/amphora-button.model';
import {ButtonColorsEnum, ButtonTypesEnum} from '../../../shared/enums/component-types/button-types.enum';
import {fadeInOutAnimation} from '../../../shared/animations/fade-in-out.animation';

@Component({
    selector: 'amphora-show-preview-card',
    templateUrl: './amphora-show-preview-card.component.html',
    styleUrls: ['./amphora-show-preview-card.component.scss'],
    animations: [fadeInOutAnimation],
})
export class AmphoraShowPreviewCardComponent implements OnInit {

    @Input()
    public model: AmphoraShowPreviewCardModel;

    public streamingIntegrationIconModels: AmphoraIconModel[];
    public seeMoreButtonModel: AmphoraButtonModel;
    public showOverlay = false;

    constructor() { }

    public ngOnInit(): void {
        this.streamingIntegrationIconModels = this.model.optional.streamingIntegrations.map(integration => AmphoraIconModel.create(
            integration as unknown as IconsEnum,
            {
                size: {
                    width: 48,
                    height: 48,
                }
            }
        ));

        this.seeMoreButtonModel = AmphoraButtonModel.create('See More', {
            buttonType: ButtonTypesEnum.OUTLINED,
            buttonColor: ButtonColorsEnum.WHITE,
            size: {
                width: 128,
            },
            onClick: () => {
                if (this.model.optional.onButtonClick) {
                    this.model.optional.onButtonClick();
                }
            }
        });
    }

    public changeShowOverlay(value: boolean) {
        this.showOverlay = value;
    }
}
