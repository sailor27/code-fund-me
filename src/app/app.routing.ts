import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DirectoryComponent } from './directory/directory.component';
import { ProjectDetailComponent } from './project-detail/project-detail.component';



const appRoutes: Routes = [
  {
    path: '',
    component: DirectoryComponent
  },
  {
    path: 'projects/:id',
    component: ProjectDetailComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
