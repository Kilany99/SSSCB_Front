import { Injectable } from '@angular/core';
import { ClientDetails } from './client-details.model';
import {HttpClient} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ClientDetailsService {

  constructor(private http: HttpClient) { }
  formData:ClientDetails = new ClientDetails();
  readonly baseURL = 'https://localhost:5001/api/Clients';
  list : ClientDetails[];
  postClientDetails() {
    return this.http.post(this.baseURL, this.formData);
  }
  putClientDetails() {
    return this.http.put(`${this.baseURL}/${this.formData.clientId}`, this.formData);
  }
  deleteClientDetails(id: number) {
    return this.http.delete(`${this.baseURL}/${id}`);
  }

  refreshList() {
    this.http.get(this.baseURL)
      .toPromise()
      .then(res =>this.list = res as ClientDetails[]);
  }
  


}
