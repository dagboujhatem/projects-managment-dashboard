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
    return this.httpClient.get(`${this.baseUrl}/project`);
  }

  getProjectById(id: any)
  {
    return this.httpClient.get(`${this.baseUrl}/project/${id}`);
  }

  createProject(payload: any)
  {
    return this.httpClient.post(`${this.baseUrl}/project`, payload);
  }

  updateProjectById(id: any, payload: any)
  {
    return this.httpClient.put(`${this.baseUrl}/project/${id}`, payload);
  }

  deleteProjectById(id: any)
  {
    return this.httpClient.delete(`${this.baseUrl}/project/${id}`);
  }
}
