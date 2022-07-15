import { Component, OnInit , Input, Output, EventEmitter} from '@angular/core';
import { ClientDetails } from 'src/app/shared/client-details.model';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  constructor() { }
  @Input() currentUser: ClientDetails;
  @Output() logOutMsgEmit = new EventEmitter<string>(); 
  ngOnInit(): void {
  }

  logout(){
    this.logOutMsgEmit.emit('logout');
  }
}
