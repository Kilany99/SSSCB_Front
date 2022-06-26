import { Component, OnInit } from '@angular/core';
import { CamerasDetails } from 'src/app/shared/cameras-details.model';
import { CamerasDetailsService } from 'src/app/shared/cameras-details.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-cameras-details-form',
  templateUrl: './cameras-details-form.component.html',
  styles: [
  ]
})
export class CamerasDetailsFormComponent implements OnInit {

  constructor(public service: CamerasDetailsService) { }

  ngOnInit(): void {
  }
  resetForm(form: NgForm) {
    form.form.reset();
    this.service.formData = new CamerasDetails();
  }
  onSubmit(form: NgForm) {
    this.insertRecord(form);
  }
  
  insertRecord(form: NgForm) {
    this.service.postCameraDetails().subscribe(
      res => {
        this.resetForm(form);
        this.service.refreshList();
      },
      err => { console.log(err); }
    )
  }

}
