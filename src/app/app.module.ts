import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppEventsComponent } from './app-events.component';
import { EventsListComponent } from './events/events-list.component';
import { EventThumbnailComponent } from './events/event-thumbnail.component';
import { NavBarComponent } from './nav/navbar.component';
import { EventDetailsComponent } from './events/event-details.component';
import { RouterModule } from '@angular/router';
import { appRoutes } from './routes';
import { EventService } from './shared/event-service'
@NgModule({
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  declarations: [
    AppEventsComponent,
    EventsListComponent,
    EventThumbnailComponent,
    NavBarComponent,
    EventDetailsComponent
  ],
  providers: [EventService],
  bootstrap: [AppEventsComponent]
})
export class AppEventsModule {



}

