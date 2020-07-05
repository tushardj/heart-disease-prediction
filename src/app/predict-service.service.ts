import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { PredictClass } from './predict-class';

@Injectable({
  providedIn: 'root'
})
export class PredictServiceService {
  _url = 'http://localhost:5000/result';
  constructor( private _http:HttpClient ) { }

  predict(preditionData: PredictClass){
    return this._http.post<any>(this._url, preditionData);
  }
}
