import { Routes } from '@angular/router'
import { EventsListComponent } from './events/events-list.component'
import { EventDetailsComponent } from './events/event-details.component'
export const appRoutes = [

  { path : 'events', component: EventsListComponent },
  { path : 'events/:1', component: EventDetailsComponent },
  { path : '', redirectTo : '/events', pathMatch : 'full' }
]
