import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

interface myData{
  obj :Object
}
@Injectable({
  providedIn: 'root'
})
export class RecordsService {

  constructor(private _http : HttpClient) {

   }

  getData(){
    return this._http.get<myData>('http://localhost:1234/file.php');
                
  }
}
