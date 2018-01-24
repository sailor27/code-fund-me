import { Pipe, PipeTransform } from '@angular/core';
import { FirebaseListObservable } from 'angularfire2/database';


@Pipe({
  name: 'category',
  pure: false
})
export class CategoryPipe implements PipeTransform {
  projects: FirebaseListObservable<any[]>;
  transform(projects, desiredCategory) {

    var output = [];
    if(desiredCategory === "tech") {
      for (let i = 0; i<projects.length; i++) {
        if (projects[i].category === "tech") {
          output.push(projects[i]);
        }
      }
      return output;
    } else if (desiredCategory === "home") {
      for (let i = 0; i<projects.length; i++) {
        if(projects[i].category === "home") {
          output.push(projects[i]);
        }
      }
      return output;
    } else if (desiredCategory === "music") {
      for (let i = 0; i<projects.length; i++) {
        if(projects[i].category === "music") {
          output.push(projects[i]);
        }
      }
      return output;
    } else if (desiredCategory === "games") {
      for (let i = 0; i<projects.length; i++) {
        if(projects[i].category === "games") {
          output.push(projects[i]);
        }
      }
      return output;
    } else {
      return projects;
    }
  }

}
