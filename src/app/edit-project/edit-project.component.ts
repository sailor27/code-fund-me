//also contains delete project

import { Component, OnInit, Input } from '@angular/core';
import { FireBaseService } from './../fire-base.service';

@Component({
  selector: 'app-edit-project',
  templateUrl: './edit-project.component.html',
  styleUrls: ['./edit-project.component.scss'],
  providers: [FireBaseService]
})
export class EditProjectComponent implements OnInit {

  //input is for data sent down from directory component.
  //selectedProject is passed into beginUpdate and beginDelete as the 'project'
  @Input() selectedProject;

  constructor(private fbService: FireBaseService) { }

  ngOnInit() {
  }
  beginUpdate(project){
    this.fbService.updateProject(project);
  }

  beginDelete(project){
    if(confirm("Are You Sure?")){
      this.fbService.deleteProject(project)
    }
  }
}
