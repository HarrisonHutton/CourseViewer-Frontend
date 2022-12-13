import { Component } from '@angular/core';
import { SearchOptionsService } from '../@services/search-options.service';

@Component({
  selector: 'app-search-options',
  templateUrl: './search-options.component.html',
  styleUrls: ['./search-options.component.scss']
})
export class SearchOptionsComponent {

  selectedDepartment: string = '';

  constructor(private searchOptions: SearchOptionsService) { }

}
