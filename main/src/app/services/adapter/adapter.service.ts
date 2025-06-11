import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ENDPOINTS } from 'src/app/api.constants';

export interface Adapter {
  name: string;
  url: string;
  requiredPlatformId: boolean;
}

@Injectable({
  providedIn: 'root',
})
export class AdapterService {
  constructor(private http: HttpClient) { }

  private getAuthHeaders(): HttpHeaders {
    const token = localStorage.getItem('token') || '';
    return new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`
    });
  }

  getAdapters(): Observable<Adapter[]> {
    return this.http.get<Adapter[]>(ENDPOINTS.ADAPTERS, {
      withCredentials: true,
      headers: this.getAuthHeaders()
    });

  }
}

