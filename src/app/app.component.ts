import { Component, OnInit } from '@angular/core';
import { CookiesService } from './services/cookies.service';
import { UserService } from './services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  constructor(private cookiesService: CookiesService, private userService: UserService) { }

  ngOnInit(): void {

    this.userService.user = this.cookiesService.get("userName")

  }



}
