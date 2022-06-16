import {ContentTypesEnum} from '../../../shared/enums/content-types.enum';

export class AmphoraConfirmDeletionPopUpModel {
    public item: string;
    public contentType: ContentTypesEnum;
    public onDelete: () => void;

    constructor(item: string, contentType: ContentTypesEnum, onDelete: () => void) {
        this.item = item;
        this.contentType = contentType;
        this.onDelete = onDelete;
    }

    public static create(item: string, contentType: ContentTypesEnum, onDelete: () => void): AmphoraConfirmDeletionPopUpModel {
        return new AmphoraConfirmDeletionPopUpModel(item, contentType, onDelete);
    }
}
