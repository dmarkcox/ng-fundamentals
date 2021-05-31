import { Component } from '@angular/core'
import { EventService } from '../shared/event-service'
import { ToastrService } from '../common/toastr.service'

declare let toastr:any

  @Component({
  template: `
  <div>
    <h1>Angular Upcoming Events</h1>
    <hr/>
      <div class>
      <div *ngFor="let event of events" class="col-md-5">
      <app-event-thumbnail [event] = "event" (click)="handleClickMe(event.name)"></app-event-thumbnail>
      </div>
    </div>
  </div>
  `
  })
  export class EventsListComponent {

    events:any[]

    constructor(private eventService : EventService, private toastr : ToastrService ) {
    }

    ngOnInit() {
      this.events = this.eventService.getEvents();
    }

    handleClickMe(eventName) {
      console.log(eventName)
      toastr.success(eventName)
    }

}
