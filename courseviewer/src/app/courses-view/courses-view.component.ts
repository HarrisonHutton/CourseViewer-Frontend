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

  currentDpt: string = '';

  courses: CourseInfo[] = [];

  ngOnInit(): void {
    /* Get the most recently chosen department */
    this.searchOptions.currentDpt.subscribe(dpt => {
      this.currentDpt = dpt;
      /* Get the courses for the most recently chosen department */
      this.coursesdb.getDptCourses(this.currentDpt).subscribe((data: any) => {
        this.courses = JSON.parse(data);
      });
    });
  }



}
