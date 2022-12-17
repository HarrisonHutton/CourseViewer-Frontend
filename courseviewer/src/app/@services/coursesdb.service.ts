import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CoursesdbService {

  constructor(private http: HttpClient) { }

  getAllCourses() {
    return this.http.get('http://localhost:5000/api/courses');
  }

  getDptCourses(dpt: string) {
    return this.http.get(`http://localhost:5000/api/courses/${dpt}`);
  }

  getAllDepartments() {
    return this.http.get('http://localhost:5000/api/departments');
  }
}
