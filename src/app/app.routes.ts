import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { FetchingDataComponent } from './pages/fetching-data/fetching-data.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    title: 'Home page',
  },
  {
    path: 'fetchhing-data',
    component: FetchingDataComponent,
    title: 'Fetching',
  },
];
