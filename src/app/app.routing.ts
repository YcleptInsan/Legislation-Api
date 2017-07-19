import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { CongressFormComponent } from './congress-form/congress-form.component';

const appRoutes: Routes = [
  {
    path: 'app-congress-form',
    component: CongressFormComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
