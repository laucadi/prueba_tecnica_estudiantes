import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Student } from '../../models/student.model';

@Injectable({
  providedIn: 'root',
})
export class StudentService {
  constructor(private _httpClient: HttpClient) {}

  obtenerEstudiantes(): Observable<Student[]> {
    return this._httpClient.get<any>(`${environment.url}/students`).pipe(
      map((res: any) => {
        return res.response.data;
      })
    );
  }

  studentById(id: string): Observable<Student[]> {
    return this._httpClient.get<any>(`${environment.url}/students/${id}`).pipe(
      map((res: any) => {
        return res.response.data;
      })
    );
  }
  updateStudent(id: string, data: any): Observable<Student[]> {
    return this._httpClient
      .patch<any>(`${environment.url}/students/${id}`, data)
      .pipe(
        map((res: any) => {
          return res.response.data;
        })
      );
  }
}
