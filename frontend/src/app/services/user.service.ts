import { EventEmitter, Injectable } from '@angular/core';
import { Subject } from 'rxjs';

import { SessionService } from './session.service';

@Injectable({
    providedIn: 'root',
})

export class UserService {

    public postLoginNotifier: Subject<any>;

    constructor(
        private sessionService: SessionService,
    ) {
        this.postLoginNotifier = new Subject<any>();
    }

    public updateOnSuccessfulLogin(): void {
        const userDetails = this.sessionService.getSessionItem('user-details');
        this.postLoginNotifier.next(userDetails);
    }
}
