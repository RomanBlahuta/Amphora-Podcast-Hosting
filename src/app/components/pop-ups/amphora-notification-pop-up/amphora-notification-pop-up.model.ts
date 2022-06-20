import {Observable} from 'rxjs';

export interface IOptional {
    buttonLabel?: string;
    label?: string;
    onClick?: () => void;
}

export class AmphoraNotificationPopUpModel {
    public controller$: Observable<boolean>;
    public optional: IOptional;

    constructor(controller$: Observable<boolean>, optional?: IOptional) {
        this.controller$ = controller$;
        this.optional = {
            buttonLabel: optional?.buttonLabel || 'OK',
            label: optional?.label || 'Notification',
            onClick: optional?.onClick || undefined,
        };
    }

    public static create(controller$: Observable<boolean>, optional?: IOptional): AmphoraNotificationPopUpModel {
        return new AmphoraNotificationPopUpModel(controller$, optional);
    }
}
