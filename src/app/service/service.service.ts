import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environments } from 'src/enviroments/enviroments';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  convertUrl=environments.convert;
  constructor(private httpClient: HttpClient) { }
  public convert(divisa: string): Observable<any>{
    return this.httpClient.get<any>(this.convertUrl + `&base=${divisa}`);
  }

}
