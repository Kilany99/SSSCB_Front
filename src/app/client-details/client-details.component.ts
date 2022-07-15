import { Component, OnInit } from '@angular/core';
import { ClientDetails } from '../shared/client-details.model';
import { ClientDetailsService } from '../shared/client-details.service';

@Component({
  selector: 'app-client-details',
  templateUrl: './client-details.component.html',
  styles: [
  ]
})
export class ClientDetailsComponent implements OnInit {

  constructor(public service: ClientDetailsService) { }

  ngOnInit(): void {
    this.service.refreshList();
    this.service.getClientDetails().subscribe(x =>{
      this.clientList = x;
    })
  }
  populateForm(selectedRecord:ClientDetails) {
    this.service.formData = Object.assign({}, selectedRecord);
  }
  clientList: Array<ClientDetails> = [];
  onDelete(CId:number) {
    if (confirm('Are you sure to delete this record ?')) {
      this.service.deleteClientDetails(CId)
        .subscribe(res => {
          this.service.refreshList();
        },
        err => { console.log(err); })
    }
  }
  editItem(){

  }
  deleteItem(){
    
  }

}
