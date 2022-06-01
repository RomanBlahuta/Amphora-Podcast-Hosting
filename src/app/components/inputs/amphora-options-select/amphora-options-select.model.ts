import {Observable} from 'rxjs';
import {EpisodeTypesEnum} from '../../../shared/enums/episode-types.enum';

export interface IOptional {
    onOptionClick?: (option: EpisodeTypesEnum) => void;
}

export class AmphoraOptionsSelectModel {
    public valueController: Observable<EpisodeTypesEnum>;
    public optional: IOptional;
    constructor(valueController: Observable<EpisodeTypesEnum>, optional?: IOptional) {
        this.valueController = valueController;
        this.optional = {
            onOptionClick: optional?.onOptionClick || undefined,
        };
    }

    public static create(valueController: Observable<EpisodeTypesEnum>, optional: IOptional): AmphoraOptionsSelectModel {
        return new AmphoraOptionsSelectModel(valueController, optional);
    }
}
