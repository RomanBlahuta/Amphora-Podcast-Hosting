import {Component, Input, OnInit} from '@angular/core';
import {IconsEnum} from '../../../shared/enums/icons.enum';
import {PopUpService} from '../../../services/utils/pop-up.service';
import {AmphoraCommonPopUpModel} from '../amphora-common-pop-up/amphora-common-pop-up.model';
import {AmphoraButtonModel} from '../../common/amphora-button/amphora-button.model';
import {ButtonTypesEnum} from '../../../shared/enums/component-types/button-types.enum';
import {AmphoraIconModel} from '../../common/amphora-icon/amphora-icon.model';
import {AmphoraRecordAudioPopUpModel} from './amphora-record-audio-pop-up.model';

@Component({
    selector: 'amphora-record-audio-pop-up',
    templateUrl: './amphora-record-audio-pop-up.component.html',
    styleUrls: ['./amphora-record-audio-pop-up.component.scss'],
})
export class AmphoraRecordAudioPopUpComponent implements OnInit {
    @Input()
    public model: AmphoraRecordAudioPopUpModel;

    public playing = false;
    public done = false;
    public recordingCommonPopUpModel: AmphoraCommonPopUpModel;
    public playButtonModel: AmphoraButtonModel;
    public pauseButtonModel: AmphoraButtonModel;
    public stopButtonModel: AmphoraButtonModel;
    public mediaRecorder: MediaRecorder;
    public fileReader = new FileReader();
    public chunks: Blob[] = [];
    public file: File;

    constructor(private popUpService: PopUpService) { }

    public ngOnInit(): void {
        this.fileReader.onload = (event) => {
            if (this.done) {
                this.model.onInput(this.file, event.target.result as string, this.file.name);
            }
        };

        navigator.mediaDevices.getUserMedia({
            audio: true,
        }).then(
            (stream) => {
                this.mediaRecorder = new MediaRecorder(stream);

                this.mediaRecorder.onstop = () => {
                    const blob = new Blob(this.chunks, { type : 'audio/ogg; codecs=opus' });
                    this.file = new File([blob], 'recorded-audio.ogg', { type : 'audio/ogg; codecs=opus' });
                    this.fileReader.readAsDataURL(this.file);
                };
                this.mediaRecorder.ondataavailable = (data) => {
                    this.chunks.push(data.data);
                };
            },
            (err) => console.log(err),
        );

        this.recordingCommonPopUpModel = this.popUpService.createRecordingCommonPopUp();

        this.playButtonModel = this.createRecordingButton(IconsEnum.PLAY, () => {
            this.mediaRecorder.start();
            this.playing = true;
            this.done = false;
        });
        this.pauseButtonModel = this.createRecordingButton(IconsEnum.PAUSE, () => {
            this.mediaRecorder.stop();
            this.playing = false;
        });
        this.stopButtonModel = this.createRecordingButton(IconsEnum.STOP, () => {
            this.done = true;
            this.playing = false;
            this.mediaRecorder.stop();
            this.popUpService.hidePopUp();
        });
    }

    public createRecordingButton(icon: IconsEnum, onClick: () => void): AmphoraButtonModel {
        return AmphoraButtonModel.create('', {
            buttonType: ButtonTypesEnum.OUTLINED,
            size: {
                width: 56,
                height: 56,
            },
            onClick,
            circle: true,
            iconModel: AmphoraIconModel.create(icon, {
                size: {
                    width: 28,
                    height: 28,
                }
            }),
        });
    }
}
