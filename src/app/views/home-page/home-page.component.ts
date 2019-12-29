import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user/user.service';
import { Router } from '@angular/router';
import { BitcoinService } from 'src/app/services/bitcoin/bitcoin.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  user: any = {};
  rate: any;
  
  constructor(
    private userService: UserService,
    private bitcoinService: BitcoinService,
    private router: Router
  ) { }

  ngOnInit() {
    this.userService.getUser()
      .subscribe(user => {
        if (!user) return this.router.navigateByUrl('/signup')
        else this.user = user
      })
    this.bitcoinService.getRate()
      .subscribe(rate => this.rate = rate)
  }

  get usd() {
    if (this.rate) return (this.user.coins / this.rate).toFixed(3)
    return undefined
  }
}
