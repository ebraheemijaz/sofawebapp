import { Component, OnInit } from '@angular/core';
import { DataServiceService, IContactUs } from 'src/app/data-service.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { finalize, tap } from 'rxjs/operators';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contact-us-page',
  templateUrl: './contact-us-page.component.html',
  styleUrls: ['./contact-us-page.component.css'],
})
export class ContactUsPageComponent implements OnInit {
  contactUsForm: FormGroup = new FormGroup({
    name: new FormControl('', Validators.required),
    email: new FormControl('', Validators.required),
    phone: new FormControl('', Validators.required),
    message: new FormControl('', Validators.required),
  });
  contactInfo: IContactUs = this.dataservice.getContactUs();
  constructor(
    private dataservice: DataServiceService,
    private http: HttpClient,
    private router: Router
  ) {}

  ngOnInit(): void {}

  public onSubmit() {
    const message = {
      channel: '#neworder',
      text: `New Order from \nName: ${
        this.contactUsForm.get('name')?.value
      }, Phone: ${this.contactUsForm.get('phone')?.value}\nEmail: ${
        this.contactUsForm.get('email')?.value
      }\nMessage: ${this.contactUsForm.get('message')?.value}`,
    };
    this.http
      .post<any>(this.contactInfo.formSubmissionLink, message, {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
      })
      .subscribe({
        error: (error) => {
          if (error.status === 200) {
            alert('Message Successfully Sent.');
            this.contactUsForm.reset();
          } else {
            alert('Something went wrong. Please try again');
          }
        },
      });
  }
}
