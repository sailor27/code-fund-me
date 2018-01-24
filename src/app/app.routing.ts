import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DirectoryComponent } from './directory/directory.component'


const appRoutes: Routes = [
  {
    path: '',
    component: DirectoryComponent
  },
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
