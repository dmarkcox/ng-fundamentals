import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppEventsComponent } from './app-events.component';
import { EventsListComponent } from './events/events-list.component';
import { EventThumbnailComponent } from './events/event-thumbnail.component';
import { NavBarComponent } from './nav/navbar.component';

@NgModule({
  imports: [
    BrowserModule,
  ],
  declarations: [
    AppEventsComponent,
    EventsListComponent,
    EventThumbnailComponent,
    NavBarComponent
  ],
  bootstrap: [AppEventsComponent]
})
export class AppEventsModule {



}

