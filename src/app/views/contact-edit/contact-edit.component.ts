import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { ContactService } from 'src/app/services/contact/contact.service';
import { Router } from '@angular/router';

@Component({
  selector: 'contact-edit',
  templateUrl: './contact-edit.component.html',
  styleUrls: ['./contact-edit.component.scss']
})
export class ContactEditComponent implements OnInit {
  contact: any = {};

  constructor(
    private contactService: ContactService,
    private route: ActivatedRoute,
    private location: Location,
    private router: Router
  ) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.contactService.getContactById(params.id)
        .subscribe(contact => {
          this.contact = contact
        });
    });
  }

  goBack() {
    this.location.back();
  }

  removeContact() {
    this.contactService.removeContact(this.contact._id)
      .subscribe(() => this.router.navigateByUrl('/contact'))
  }
}
