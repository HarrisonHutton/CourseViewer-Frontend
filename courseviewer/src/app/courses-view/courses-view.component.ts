import { Component } from '@angular/core';
import { CoursesdbService } from '../@services/coursesdb.service';
import { CourseInfo } from '../@interfaces/course-info';
import { SearchOptionsService } from '../@services/search-options.service';

@Component({
  selector: 'app-courses-view',
  templateUrl: './courses-view.component.html',
  styleUrls: ['./courses-view.component.scss']
})
export class CoursesViewComponent {

  constructor(
      private coursesdb: CoursesdbService,
      private searchOptions: SearchOptionsService
  ) { }

  courses: CourseInfo[] = [];

  ngOnInit(): void {
    this.coursesdb.getDptCourses("CSE").subscribe((data: any) => {
      this.courses = JSON.parse(data);
    });
  }

}
