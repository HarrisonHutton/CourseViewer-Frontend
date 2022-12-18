import { Component, OnInit } from '@angular/core';
import { SearchOptionsService } from '../@services/search-options.service';

@Component({
  selector: 'app-department-header',
  templateUrl: './department-header.component.html',
  styleUrls: ['./department-header.component.scss']
})
export class DepartmentHeaderComponent implements OnInit {

  currentDpt: string = '';

  constructor(private searchOptions: SearchOptionsService) { }

  ngOnInit() {
    this.searchOptions.currentDpt.subscribe(department => this.currentDpt = department);
  }

}
