import { Pipe, PipeTransform } from '@angular/core';
import { Project } from './project.model';
import { FirebaseListObservable } from 'angularfire2/database';
@Pipe({
  name: 'filterByGoal'
})
export class FilterByGoalPipe implements PipeTransform {
  projects: FirebaseListObservable<any[]>;

  transform(projects, desiredGoal) {
    let output= [];
    if(desiredGoal === "lessthan25") {
      for (let i = 0; i<projects.length; i++) {
        if (parseInt(projects[i].goal) < 25000) {
          output.push(projects[i]);
        }
      }
      return output;
    } else if (desiredGoal === "morethan25") {
      for (let i = 0; i<projects.length; i++) {
        if (parseInt(projects[i].goal)>= 25000) {
          output.push(projects[i]);
        }
      }
      return output;
    } else {
      return projects;
    }

  }
}
