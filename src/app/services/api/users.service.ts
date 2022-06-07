import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  baseUrl = environment.baseUrl;
  constructor(private httpClient: HttpClient) { }

  getAllUsers()
  {
    return this.httpClient.get(`${this.baseUrl}/users`);
  }

  getUserById(id: any)
  {
    return this.httpClient.get(`${this.baseUrl}/users/${id}`);
  }

  createUser(payload: any)
  {
    return this.httpClient.post(`${this.baseUrl}/users`, payload);
  }

  updateUserById(id: any, payload: any)
  {
    return this.httpClient.put(`${this.baseUrl}/users/${id}`, payload);
  }

  deleteUserById(id: any)
  {
    return this.httpClient.delete(`${this.baseUrl}/users/${id}`);
  }

  getUserProfile()
  {
    return this.httpClient.get(`${this.baseUrl}/profil`);
  }

  updateUserProfile(payload: any)
  {
    return this.httpClient.put(`${this.baseUrl}/profil`, payload);
  }

}
