import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoursesViewComponent } from './courses-view/courses-view.component';
import { CoursesdbService } from './@services/coursesdb.service';
import { SearchOptionsComponent } from './search-options/search-options.component';
import { SearchOptionsService } from './@services/search-options.service';
import { FormsModule } from '@angular/forms';
import { DepartmentHeaderComponent } from './department-header/department-header.component';

@NgModule({
  declarations: [
    AppComponent,
    CoursesViewComponent,
    SearchOptionsComponent,
    DepartmentHeaderComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    CoursesdbService,
    SearchOptionsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
