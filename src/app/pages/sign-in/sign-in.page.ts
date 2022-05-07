import { Component, OnInit } from '@angular/core';
import {SignInService} from './sign-in.service';
import {AmphoraHeaderModel} from '../../components/common/amphora-header/amphora-header.model';

@Component({
  selector: 'amphora-sign-in',
  templateUrl: './sign-in.page.html',
  styleUrls: ['./sign-in.page.scss'],
})
export class SignInPage implements OnInit {

    public headerModel: AmphoraHeaderModel;

    constructor(private signInService: SignInService) { }

    public ngOnInit(): void {
        this.createModels();
    }

    private createModels(): void {
        this.headerModel = this.signInService.createHeaderModel();
    }

}
