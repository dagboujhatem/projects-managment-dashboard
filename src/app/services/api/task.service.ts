import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  baseUrl = environment.baseUrl;
  constructor(private httpClient: HttpClient) { }

  getAllTasks(projectId: any)
  {
    return this.httpClient.get(`${this.baseUrl}/tasks/all/${projectId}`);
  }

  getTaskById(id: any)
  {
    return this.httpClient.get(`${this.baseUrl}/tasks/${id}`);
  }

  createTask(payload: any)
  {
    return this.httpClient.post(`${this.baseUrl}/tasks`, payload);
  }

  updateTaskById(id: any, payload: any)
  {
    return this.httpClient.put(`${this.baseUrl}/tasks/${id}`, payload);
  }

  deleteTaskById(id: any)
  {
    return this.httpClient.delete(`${this.baseUrl}/tasks/${id}`);
  }
}
