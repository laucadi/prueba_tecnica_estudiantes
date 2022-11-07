import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Course } from '../../models/course.model';

@Injectable({
  providedIn: 'root',
})
export class CourseService {
  constructor(private _httpClient: HttpClient) {}

  getAllCourses(): Observable<Course[]> {
    return this._httpClient.get<any>(`${environment.url}/courses`).pipe(
      map((res: any) => {
        return res.response.data;
      })
    );
  }
}
