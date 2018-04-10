import { Component, OnInit } from '@angular/core';
import {CoursesService} from './courses.service';

@Component({
  selector: 'courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {
      title ="List of Courses";
      courses;
      isActive=true;
      private email;
      constructor(courseService : CoursesService){
          this.courses=courseService.getCourses();
      }
      onSave($event){
        this.isActive?this.isActive=false:this.isActive=true;
      }
      onKeyUp(){
        console.log(this.email);
      }

      getTitle(){
        return this.title;
      }
      ngOnInit() {
      }
  
  

}
