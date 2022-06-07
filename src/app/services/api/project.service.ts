import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  baseUrl = environment.baseUrl;
  constructor(private httpClient: HttpClient) { }

  getAllProjects()
  {
    return this.httpClient.get(`${this.baseUrl}/projects`);
  }

  getProjectById(id: any)
  {
    return this.httpClient.get(`${this.baseUrl}/projects/${id}`);
  }

  createProject(payload: any)
  {
    return this.httpClient.post(`${this.baseUrl}/projects`, payload);
  }

  updateProjectById(id: any, payload: any)
  {
    return this.httpClient.put(`${this.baseUrl}/projects/${id}`, payload);
  }

  deleteProjectById(id: any)
  {
    return this.httpClient.delete(`${this.baseUrl}/projects/${id}`);
  }
}
