import { Component, OnInit } from '@angular/core';
import { CoursesdbService } from '../@services/coursesdb.service';
import { SearchOptionsService } from '../@services/search-options.service';

@Component({
  selector: 'app-search-options',
  templateUrl: './search-options.component.html',
  styleUrls: ['./search-options.component.scss']
})
export class SearchOptionsComponent implements OnInit {

  selectedDepartment: string = 'CSE';

  allDepartments: string[] = [];

  constructor(
      private coursesdb: CoursesdbService,
      private searchOptions: SearchOptionsService
    ) { }

  ngOnInit() {
    this.coursesdb.getAllDepartments().subscribe((data: any) => {
      this.allDepartments = JSON.parse(data);
    })
    this.searchOptions.currentDpt.subscribe(dpt => this.selectedDepartment = dpt);
  }

  onChoseDpt(dpt: string) {
    this.searchOptions.changeDpt(dpt);
  }

}
