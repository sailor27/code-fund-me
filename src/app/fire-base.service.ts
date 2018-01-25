import { Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { Project } from './project.model';


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

  addProject(newProject: Project) {
    this.projects.push(newProject);
  }
  updateProject(localProject){
    let projectInFb = this.getProjectById(localProject.$key);
    projectInFb.update({ title: localProject.title, image: localProject.image, creators: localProject.creators,  description: localProject.description,  category: localProject.category,  goal: localProject.goal,  plans: localProject.plans,  swag: localProject.swag});
  }

  deleteProject(localProject){
    let projectInFb = this.getProjectById(localProject.$key);
    projectInFb.remove();
  }


}
