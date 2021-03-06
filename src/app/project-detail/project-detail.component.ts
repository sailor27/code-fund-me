import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { FirebaseObjectObservable } from 'angularfire2/database';
import { FireBaseService } from './../fire-base.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-project-detail',
  templateUrl: './project-detail.component.html',
  styleUrls: ['./project-detail.component.scss'],
  providers: [FireBaseService]
})
export class ProjectDetailComponent implements OnInit {
  project: FirebaseObjectObservable<any[]>;
  projectId: string;
  projectToDisplay;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private location: Location,
    private fbService: FireBaseService
  ) {}

  ngOnInit() {
    this.route.params.forEach((urlParameters) => {
      this.projectId = urlParameters['id'];
    });
    this.projectToDisplay = this.fbService.getProjectById(this.projectId);
  }

  goToFunding(){
    this.router.navigate(['projects', this.projectId, 'fund']);
  }

}
