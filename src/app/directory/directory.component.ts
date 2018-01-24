import { Component, OnInit } from '@angular/core';
import { FirebaseListObservable } from 'angularfire2/database';
import { FireBaseService } from './../fire-base.service';


@Component({
  selector: 'app-directory',
  templateUrl: './directory.component.html',
  styleUrls: ['./directory.component.scss'],
  providers: [FireBaseService]
})
export class DirectoryComponent implements OnInit {
  projects: FirebaseListObservable<any[]>;

  constructor(private fbService: FireBaseService) { }

  ngOnInit() {
    this.projects = this.fbService.getProjects();
   }

}
