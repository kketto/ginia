import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';

@Component({
    selector: 'app-sign-in',
    templateUrl: './sign-in.component.html',
    styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {

    form: FormGroup;

    @Output()
    close = new EventEmitter<void>();

    constructor(private formbuilder: FormBuilder, private userService: UserService) { }

    ngOnInit(): void {
        this.form = this.formbuilder.group({
            userName: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(15)]],
            password: ['', [Validators.required, Validators.minLength(6)]]

        });
    }

    onSignIn(): void {
        const { userName, password } = this.form.value;
        const result = this.userService.singIn(userName, password);
        if (result) {
            this.close.emit();
        }
    }

}