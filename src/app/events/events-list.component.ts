import { Component } from '@angular/core';

@Component({
  selector: 'app-events-listing',
  template: `
  <div class="well hoverwell thumbnail">
    <h1>Angular Upcoming Events</h1>
    <app-event-thumbnail (eventClick)="handleEventClicked($event)" [event]="event1"></app-event-thumbnail>
  </div>
  `
})
  export class EventsListComponent {
    event1 = {
    id: 1,
    name: 'Angular Connect',
    date: '9/26/2020',
    time: '10:00 am',
    price: '599.99',
    imageUrl: '/assets/images/angularcommand-shield.png',
    location: {
    address: '1057 DT',
    city: 'London',
    country: 'England'
    }
  }

  handleEventClicked(data:any) {
    console.log(data)
  }

}
