import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MediaService {

  constructor(private http: HttpClient) { }

  uploadPhoto(file : File): Observable<any>
  {
    let data : FormData = new FormData();
    data.append('file', file)
    data.append('upload_preset', 'oo0sdwsx')
    data.append('cloud_name', 'dmvixfdnn')

    return this.http.post('https://api.cloudinary.com/v1_1/dmvixfdnn/image/upload', data)
  }
}
