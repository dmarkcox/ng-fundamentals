import { Component } from '@angular/core'
import { EventService } from '../shared/event-service'

@Component({

  template: `
  <div>
    <h1>Angular Upcoming Events</h1>
    <hr/>
    <div class>
      <div *ngFor="let event of events" class="col-md-5">
        <app-event-thumbnail [event] = "event"></app-event-thumbnail>
      </div>
    </div>
  </div>
  `
})
  export class EventsListComponent {

    events:any[]

    constructor(private eventService : EventService) {
      this.events = this.eventService.getEvents();
    }

    //ngOnInit() {
    //}

}
