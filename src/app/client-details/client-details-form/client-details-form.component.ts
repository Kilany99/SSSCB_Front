import { Component, OnInit } from '@angular/core';
import { ClientDetails } from 'src/app/shared/client-details.model';
import { ClientDetailsService } from 'src/app/shared/client-details.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-client-details-form',
  templateUrl: './client-details-form.component.html',
  styles: [
  ]
})
export class ClientDetailsFormComponent implements OnInit {

  constructor(public  service:ClientDetailsService) { }

  ngOnInit(): void {
  }
  resetForm(form: NgForm) {
    form.form.reset();
    this.service.formData = new ClientDetails();
  }
  onSubmit(form: NgForm) {
    this.insertRecord(form);
  }
  insertRecord(form: NgForm) {
    this.service.postClientDetails().subscribe(
      res => {
        this.resetForm(form);
        this.service.refreshList();
      },
      err => { console.log(err); }
    )
  }

}
