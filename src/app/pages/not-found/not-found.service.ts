import {Injectable} from '@angular/core';
import {AmphoraIconModel} from '../../components/common/amphora-icon/amphora-icon.model';
import {IconsEnum} from '../../shared/enums/icons.enum';
import {AmphoraButtonModel} from '../../components/common/amphora-button/amphora-button.model';
import {NavController} from '@ionic/angular';
import {ButtonColorsEnum} from '../../shared/enums/component-types/button-types.enum';
import {RoutesEnum} from '../../shared/enums/routes.enum';

@Injectable({
    providedIn: 'root',
})
export class NotFoundService {
    constructor(private navController: NavController) {
    }

    public createMinotaurMazeIcon(): AmphoraIconModel {
        return AmphoraIconModel.create(IconsEnum.LABYRINTH_WITH_MINOTAUR, {
            size: {
                width: 256,
                height: 256,
            }
        });
    }

    public createBackButton(): AmphoraButtonModel {
        return AmphoraButtonModel.create('Go back', {
            buttonColor: ButtonColorsEnum.PRIMARY,
            // todo: navigate to sign-in or dashboard depending on auth value
            onClick: () => this.navController.navigateRoot(RoutesEnum.LANDING),
            size: {
                width: 138,
                height: 40,
            }
        });
    }
}
