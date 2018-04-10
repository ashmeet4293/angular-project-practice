import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import {CoursesService} from './courses/courses.service';
import { AppComponent } from './app.component';
import { CoursesComponent } from './courses/courses.component';
import { FavoriteComponent } from './favorite/favorite.component';


@NgModule({
  declarations: [
    AppComponent,
    CoursesComponent,
    FavoriteComponent
  ],
  imports: [
    FormsModule,
    BrowserModule
  ],
  providers: [CoursesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
