import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { Experience } from './pages/experience/experience';
import { Tickets } from './pages/tickets/tickets';
import { Lineup } from './pages/lineup/lineup';
import { Venue } from './pages/venue/venue';
import { Schedule } from './pages/schedule/schedule';

export const routes: Routes = [
  {path: '', component: Home},
  {path: 'experience', component: Experience},
  {path: 'tickets', component: Tickets},
  {path: 'lineup', component: Lineup},
  {path: 'venue', component: Venue},
  {path: 'schedule', component: Schedule},
  {path: '**', redirectTo: ''},
];
