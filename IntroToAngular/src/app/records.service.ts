import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class RecordsService {

  constructor(private _http : HttpClient) {

   }

  getData(){
    return this._http.get('/api/file.php');
                
  }
}
