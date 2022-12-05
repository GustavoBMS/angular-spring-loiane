import { Component } from '@angular/core';
import { Observable } from 'rxjs';

import { Course } from '../model/course';
import { CoursesService } from './../services/courses.service';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent {
  courses$: Observable<Course[]>;
  displayedColumns;

  constructor(private coursesService: CoursesService) {
    this.displayedColumns = ['name', 'category'];
    this.courses$ = this.coursesService.list();
  };
}
