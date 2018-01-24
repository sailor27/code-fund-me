import { Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';


@Injectable()
export class FireBaseService {
  projects: FirebaseListObservable<any[]>;


  constructor(private database: AngularFireDatabase) {
    this.projects = database.list('projects');

  }

  getProjects(){
    return this.projects;
  }

  getProjectById(projectId:string) {
    return this.database.object('projects/' + projectId);
  }


}
