import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { RandomActivityComponent } from './pages/random-activity/random-activity.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    title: 'Home page',
  },
  {
    path: 'random',
    component: RandomActivityComponent,
    title: 'Random Activity',
  },
];
