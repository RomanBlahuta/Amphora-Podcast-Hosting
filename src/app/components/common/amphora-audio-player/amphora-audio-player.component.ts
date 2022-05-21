import {Component, ElementRef, Input, OnInit, ViewChild} from '@angular/core';
import {AmphoraButtonModel} from '../amphora-button/amphora-button.model';
import {AmphoraAudioPlayerModel} from './amphora-audio-player.model';
import {ButtonTypesEnum} from '../../../shared/enums/component-types/button-types.enum';

@Component({
    selector: 'amphora-audio-player',
    templateUrl: './amphora-audio-player.component.html',
    styleUrls: ['./amphora-audio-player.component.scss'],
})
export class AmphoraAudioPlayerComponent implements OnInit {
    @Input()
    public model: AmphoraAudioPlayerModel;

    @ViewChild('player')
    private playerRef: ElementRef;

    public playButtonModel: AmphoraButtonModel;
    public pauseButtonModel: AmphoraButtonModel;

    // public isPlaying = true;
    public audio: HTMLAudioElement;
    constructor() { }

    public async ngOnInit(): Promise<void> {
        this.playButtonModel = AmphoraButtonModel.create('Play', {
            onClick: this.play.bind(this),
        });

        this.pauseButtonModel = AmphoraButtonModel.create('Pause', {
            onClick: this.pause.bind(this),
            buttonType: ButtonTypesEnum.OUTLINED,
        });

        await this.initAudio();
    }

    public setTime(timeValue: number, maxTime: number): void {
        this.audio.currentTime = timeValue;
        this.reRenderTrack(timeValue, maxTime);
    }

    public async play(): Promise<void> {
        await this.audio.play();
    }

    public pause(): void {
        this.audio.pause();
    }

    private async initAudio(): Promise<void> {
        this.audio = new Audio(this.model.src);
        this.audio.ontimeupdate = (_: Event) => {
            this.reRenderTrack(this.audio.currentTime, this.audio.duration);
        };
        // this.audio.onloadeddata = _ => this.isLoading = false;
        // this.audio.onended = _ => this.isPlaying = false;
        this.audio.onerror = async _ => {
            if (this.audio) {
                this.audio.pause();
            }
            console.log('Audio Error');
        };

        this.audio.volume = 1;
    }

    private reRenderTrack(timeValue: number, maxTime: number): void {
        if (this.playerRef) {
            this.playerRef.nativeElement.style.setProperty('--seek-before-width', `${(timeValue / maxTime) * 100}%`);
        }
    }
}
