import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SearchOptionsService {

  private departmentSource = new BehaviorSubject<string>("CSE");
  currentDpt = this.departmentSource.asObservable();

  constructor() { }

  changeDpt(dpt: string) {
    this.departmentSource.next(dpt);
  }

}
