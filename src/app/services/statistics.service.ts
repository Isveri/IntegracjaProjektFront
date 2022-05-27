import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class StatisticsService {

  baseURL = "http://localhost:8080/api/v1/stats";
  constructor(private http: HttpClient) { }

  downloadJsonFile():Observable<any>{
    const httpOptions = {
      responseType:'blob'as'json',
  };
    return this.http.get(this.baseURL+'/data.json',httpOptions)
  }

  downloadXMLFile():Observable<Response>{
    const httpOptions = {
      responseType: 'blob' as 'json'
  };
    return this.http.get<any>(this.baseURL+'/data.xml',httpOptions)
  }
  private getHeaders() {
    let headers = new Headers();
    headers.append('Content-Type', 'application/octet-stream');
    headers.append('responseType', 'arrayBuffer');
    return headers;
  }
}
