import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Resource} from "@angular/compiler-cli/src/ngtsc/metadata";
import {Statistics} from "../models/Statistics";

@Injectable({
  providedIn: 'root'
})
export class StatisticsService {

  baseURL = "http://localhost:8080/api/v1/stats";
  constructor(private http: HttpClient) { }

  downloadJsonFile():Observable<Resource>{
    const httpOptions = {
      responseType:'blob'as'json',
  };
    return this.http.get<any>(this.baseURL+'/data.json',httpOptions)
  }

  downloadXMLFile():Observable<Resource>{
    const httpOptions = {
      responseType: 'blob' as 'json'
  };
    return this.http.get<any>(this.baseURL+'/data.xml',httpOptions)
  }

  getAllStats():Observable<Statistics[]>{

    return this.http.get<Statistics[]>(this.baseURL+'/all');
  }

}
