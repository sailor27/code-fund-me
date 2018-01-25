import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { FirebaseObjectObservable } from 'angularfire2/database';
import { FireBaseService } from './../fire-base.service';

@Component({
  selector: 'app-fund-form',
  templateUrl: './fund-form.component.html',
  styleUrls: ['./fund-form.component.scss'],
  providers: [FireBaseService]
})
export class FundFormComponent implements OnInit {
  projectId: string;
  projectToDisplay;

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private fbService: FireBaseService
  ) {}

  ngOnInit() {
    this.route.params.forEach((urlParameters) => {
      this.projectId = urlParameters['id'];
    });
    this.fbService.getProjectById(this.projectId).subscribe(arg => {
      this.projectToDisplay = arg;
    })
  }

  onPayment(amount) {
    alert("Thank you! Your Payment of $" + amount + " to " + this.projectToDisplay.creators + " has been submitted.");

    this.projectToDisplay.goal = ((parseInt(this.projectToDisplay.goal)) - amount );

    this.fbService.updateProject(this.projectToDisplay);
  }


}
