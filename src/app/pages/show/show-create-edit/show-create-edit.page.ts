import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
    selector: 'amphora-show-create-edit',
    templateUrl: './show-create-edit.page.html',
    styleUrls: ['./show-create-edit.page.scss'],
})
export class ShowCreateEditPage implements OnInit {

    constructor(private route: ActivatedRoute) { }

    public ngOnInit(): void {
        this.route.params.subscribe((params) => {
            console.log('mode: ', params.mode);
            console.log('id: ', params.id);
        });

        this.createModels();
    }

    public createModels(): void {
        //
    }
}
