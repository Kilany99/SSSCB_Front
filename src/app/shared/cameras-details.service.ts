import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { CamerasDetails } from './cameras-details.model';

@Injectable({
  providedIn: 'root'
})
export class CamerasDetailsService {

  constructor(private http: HttpClient) { }
  formData:CamerasDetails = new CamerasDetails();
  readonly baseURL = 'https://localhost:5001/api/Cameras';
  list : CamerasDetails[];
  postCameraDetails() {
    return this.http.post(this.baseURL, this.formData);
  }
  putCameraDetails() {
    return this.http.put(`${this.baseURL}/${this.formData.cameraZoneID}`, this.formData);
  }
  deleteCameraDetails(id: number) {
    return this.http.delete(`${this.baseURL}/${id}`);
  }

  refreshList() {
    this.http.get(this.baseURL)
      .toPromise()
      .then(res =>this.list = res as CamerasDetails[]);
  }
}
