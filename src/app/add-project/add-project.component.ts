import { Component, OnInit } from '@angular/core';
import { FireBaseService } from './../fire-base.service';
import { Project } from './../project.model';

@Component({
  selector: 'app-add-project',
  templateUrl: './add-project.component.html',
  styleUrls: ['./add-project.component.scss'],
  providers: [FireBaseService]
})
export class AddProjectComponent implements OnInit {

  constructor(private fbService: FireBaseService) { }

  ngOnInit() {
  }

  submitForm(title: string, image: string, creators: string, description: string, category: string, goal: string, plan: string, swag: string){
    const newProject: Project = new Project(title, image, creators, description, category, goal, plan, swag);
    this.fbService.addProject(newProject);

  }

}
