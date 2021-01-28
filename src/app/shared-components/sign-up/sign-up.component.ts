import { Component, EventEmitter, OnDestroy, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { UserService } from 'src/app/services/user.service';


function confirmPassword(form: FormGroup): ValidationErrors | null {
    return form.value.password === form.value.confirmPassword ? null : { confirmPassword: true }
}

@Component({
    selector: 'app-sign-up',
    templateUrl: './sign-up.component.html',
    styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit, OnDestroy {

    @Output()
    close = new EventEmitter();

    private $unsubcribe = new Subject<void>();


    form: FormGroup;
    error: boolean;

    constructor(private formBuilder: FormBuilder, private userService: UserService) { }


    ngOnInit(): void {
        this.form = this.formBuilder.group({
            userName: ['', [Validators.required, Validators.minLength(4), Validators.maxLength(30), Validators.pattern(/^[A-Za-z0-9]+$/)]],
            fullName: ['', [Validators.required, Validators.minLength(4), Validators.maxLength(30)]],
            password: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(30)]],
            confirmPassword: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(30)]],
            terms: [false, Validators.requiredTrue]
        }, { validators: confirmPassword });
    }

    onSignUp(): void {
        if (this.form.invalid) {
            this.error = true;
            return
        }

        this.error = false;
        const { userName, password, fullName } = this.form.getRawValue();
        this.userService.signUp({ userName, password, fullName })
            .pipe(takeUntil(this.$unsubcribe))
            .subscribe(() => {
                this.close.emit();
            }, () => { this.error = true; })

    }

    ngOnDestroy(): void {
        this.$unsubcribe.next();
        this.$unsubcribe.complete();
    }

}