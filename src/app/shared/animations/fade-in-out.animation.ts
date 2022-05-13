import {animate, state, style, transition, trigger} from '@angular/animations';

export const fadeInOutAnimation = trigger('fadeInOutAnimation', [
    state('void', style({
        opacity: '0',
    })),
    state('*', style({
        opacity: '1',
    })),
    transition(
        'void <=> *',
        animate('0.3s ease-in-out'),
    ),
]);
