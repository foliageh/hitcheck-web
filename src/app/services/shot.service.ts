import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Shot } from '../domain/shot';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ShotService {
  private readonly baseUrl = `${environment.apiUrl}/my-shots`;
  private http = inject(HttpClient);

  retrieveShots() {
    return this.http.get<Shot[]>(this.baseUrl);
  }

  createShot(x: number | string, y: number | string, r: number | string) {
    return this.http.post<Shot>(this.baseUrl, { x, y, r });
  }
}
