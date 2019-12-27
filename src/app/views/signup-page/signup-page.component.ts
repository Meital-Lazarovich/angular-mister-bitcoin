import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'signup-page',
  templateUrl: './signup-page.component.html',
  styleUrls: ['./signup-page.component.scss']
})
export class SignupPageComponent implements OnInit {
  userName: String = '';

  constructor(
    private userService: UserService,
    private router: Router
  ) { }

  ngOnInit() {
    this.userService.getUser()
      .subscribe(user => {
        if(user) this.goToHomePage()
      })
  }

  signup() {
    this.userService.signup(this.userName)
      .subscribe(user => {
        if(user) this.goToHomePage() 
      })
  }

  goToHomePage() {
    this.router.navigateByUrl('/')
  }

}
