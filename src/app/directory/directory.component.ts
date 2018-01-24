import { Component, OnInit } from '@angular/core';
import { FirebaseListObservable } from 'angularfire2/database';
import { FireBaseService } from './../fire-base.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-directory',
  templateUrl: './directory.component.html',
  styleUrls: ['./directory.component.scss'],
  providers: [FireBaseService]
})
export class DirectoryComponent implements OnInit {
  projects: FirebaseListObservable<any[]>;
  filterByGoal: string = "allProjects";

  constructor(private router: Router, private fbService: FireBaseService) { }

  ngOnInit() {
    this.projects = this.fbService.getProjects();
   }

   goToProject(clickedProject) {
     this.router.navigate(['projects', clickedProject.$key]);
   };

   onChange(optionFromMenu) {
     this.filterByGoal = optionFromMenu;
     console.log(this.filterByGoal);
   }

}
