import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { ContactService } from 'src/app/services/contact/contact.service';
import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'contact-details',
  templateUrl: './contact-details.component.html',
  styleUrls: ['./contact-details.component.scss']
})
export class ContactDetailsComponent implements OnInit {
  contact: any = {};
  user: any = {};

  constructor(
    private contactService: ContactService,
    private route: ActivatedRoute,
    private location: Location,
    private userService: UserService
  ) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.contactService.getContactById(params.id)
        .subscribe(contact => this.contact = contact);
    });
    this.userService.getUser()
      .subscribe(user => this.user = user)
  }

  goBack() {
    this.location.back();
  }

  addMove(amount) {
    this.userService.addMove(this.contact, amount)
  }

  get movesToContact() {
    const { moves } = this.user;
    if (!moves || !moves.length) return
    return moves.filter(move => move.toId === this.contact._id)
  }

}
