import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppEventsComponent } from './app-events.component';
import { EventsListComponent } from './events/events-list.component';
import { EventThumbnailComponent } from './events/event-thumbnail.component';

@NgModule({
  imports: [
    BrowserModule,
  ],
  declarations: [
    AppEventsComponent,
    EventsListComponent,
    EventThumbnailComponent
  ],
  bootstrap: [AppEventsComponent]
})
export class AppEventsModule {



}

