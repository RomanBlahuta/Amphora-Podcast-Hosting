import {createAction, props} from '@ngrx/store';
import {EpisodeCreateFormEnum} from '../../shared/enums/forms/episode-create-form.enum';
import {ICreateImageResponseDto} from '../../services/http/image/image.dto';
import {FormModeEnum} from '../../shared/enums/forms/form-mode.enum';
import {ICreateEpisodeAudioResponseDto, ILoadEpisodeByIDResponseDTO} from '../../services/http/episode/episode.dto';
import {ILoadSeriesByShowIdResponseDTO} from '../../services/http/show/show.dto';

export namespace EpisodeCreateEditActions {
    export const input = createAction(
        '[Episode Create Edit] Input',
        props<{value: string | File; field: EpisodeCreateFormEnum}>(),
    );

    export const loadShowSeries = createAction(
        '[Episode Create Edit] Load Show Series'
    );

    export const loadShowSeriesSuccess = createAction(
        '[Episode Create Edit] Load Show Series Success',
        props<{response: ILoadSeriesByShowIdResponseDTO[]}>()
    );

    export const selectSeries = createAction(
        '[Episode Create Edit] Select Series',
        props<{series: string}>(),
    );

    export const submit = createAction(
        '[Episode Create Edit] Submit',
    );

    export const submitSuccess = createAction(
        '[Episode Create Edit] Submit Success',
    );

    export const setFormMode = createAction(
        '[Episode Create Edit] Set Form Mode',
        props<{mode: FormModeEnum; showId: string; episodeId: string}>(),
    );

    export const addSeries = createAction(
        '[Episode Create Edit] Add Series',
    );

    export const createImage = createAction(
        '[Episode Create Edit] Create Image',
        props<{file: File; url: string; fileName: string}>(),
    );

    export const createImageSuccess = createAction(
        '[Episode Create Edit] Create Image Success',
        props<{response: ICreateImageResponseDto}>()
    );

    export const createAudio = createAction(
        '[Episode Create Edit] Create Audio',
        props<{file: File; url: string; fileName: string}>()
    );

    export const createAudioSuccess = createAction(
        '[Episode Create Edit] Create Audio Success',
        props<{response: ICreateEpisodeAudioResponseDto}>()
    );

    export const createRecordedAudio = createAction(
        '[Episode Create Edit] Create Recorded Audio',
        props<{file: File; url: string; fileName: string; duration: number}>()
    );

    export const createRecordedAudioSuccess = createAction(
        '[Episode Create Edit] Create Recorded Audio Success',
        props<{response: ICreateEpisodeAudioResponseDto}>()
    );

    export const removeSeries = createAction(
        '[Episode Create Edit] Remove Series',
        props<{series: string}>(),
    );

    export const clear = createAction(
        '[Episode Create Edit] Clear',
    );

    export const loadEpisodeForEdit = createAction(
        '[Episode Create Edit] Load Episode For Edit',
        props<{id: string}>(),
    );

    export const loadEpisodeForEditSuccess = createAction(
        '[Episode Create Edit] Load Episode For Edit Success',
        props<{response: ILoadEpisodeByIDResponseDTO}>(),
    );

    export const clearAudio = createAction(
        '[Episode Create Edit] Clear Audio',
    );
}
