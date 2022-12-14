import { Component, OnInit } from '@angular/core';
import { SearchOptionsService } from '../@services/search-options.service';

@Component({
  selector: 'app-search-options',
  templateUrl: './search-options.component.html',
  styleUrls: ['./search-options.component.scss']
})
export class SearchOptionsComponent implements OnInit {

  selectedDepartment: string = 'CSE';

  constructor(private searchOptions: SearchOptionsService) { }

  ngOnInit() {
    this.searchOptions.currentDpt.subscribe(dpt => this.selectedDepartment = dpt);
  }

  onChoseDpt(dpt: string) {
    this.searchOptions.changeDpt(dpt);
  }

}
