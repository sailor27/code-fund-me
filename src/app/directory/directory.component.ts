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
  filterByCategory: string = "allProjects";

  currentRoute: string = this.router.url;

  constructor(private router: Router, private fbService: FireBaseService) { }

  ngOnInit() {
    this.projects = this.fbService.getProjects();
   }

   goToProject(clickedProject) {
     this.router.navigate(['projects', clickedProject.$key]);
   };

   onChange(optionFromMenu) {
     this.filterByGoal = optionFromMenu;
   }

   sortCategory(optionFromMenu) {
     this.filterByCategory = optionFromMenu;
   }
   ifAdmin(project){
     if (this.currentRoute === "/admin"){
       return "adminClass outer";
     } else {
       return "outer col-xl-3 col-lg-4 col-md-6 col-xs-12"
     }
   }
}
