import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CountryService {

  baseUrl = environment.baseUrl;
  constructor(private httpClient: HttpClient) { }

  getAllCountries()
  {
    return this.httpClient.get(`${this.baseUrl}/countries`);
  }
}
