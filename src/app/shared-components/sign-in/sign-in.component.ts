import { Component, EventEmitter, OnDestroy, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Subject } from 'rxjs/internal/Subject';
import { takeUntil } from 'rxjs/operators';
import { CookiesService } from 'src/app/services/cookies.service';
import { UserService } from 'src/app/services/user.service';

@Component({
    selector: 'app-sign-in',
    templateUrl: './sign-in.component.html',
    styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit, OnDestroy {

    form: FormGroup;
    private $unsubscribe = new Subject<void>();

    @Output()
    close = new EventEmitter<void>();

    constructor(private formbuilder: FormBuilder, private userService: UserService, private cookieService: CookiesService) { }


    ngOnInit(): void {
        this.form = this.formbuilder.group({
            userName: ['', [Validators.required, Validators.minLength(4), Validators.maxLength(15)]],
            password: ['', [Validators.required, Validators.minLength(4)]]

        });
    }

    onSignIn(): void {
        if (this.form.invalid) {
            return;
        }
        const { userName, password } = this.form.getRawValue();
        this.userService.singIn(userName, password)
            .pipe(takeUntil(this.$unsubscribe))
            .subscribe(
                (token) => {
                    this.cookieService.set('token', token);
                    this.close.emit();
                },
                () => {
                    this.form.reset()
                }
            );


    }

    ngOnDestroy(): void {
        this.$unsubscribe.next();
        this.$unsubscribe.complete();
    }

}