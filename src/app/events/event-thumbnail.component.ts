import { Component, Input, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-event-thumbnail',
  template: `
    <div class="well hoverwell thumbnail">
      <h2>{{event.name}}</h2>
      <div>id: {{event.id}}</div>
      <div>date: {{event.date}}</div>
      <div>time:{{event.time}}</div>
      <div>price: \${{event.price}}</div>
      <div>
        <span>Location: {{event.location.address}}</span>
        <span>{{event.location.city}}, {{event.location.country}}</span>
      </div>
      <button class="btn btn-primary" (click)="handleClickMe()">Click me</button>
    </div>
  `
})
export class EventThumbnailComponent {

  @Input() event:any
  @Output() eventClick = new EventEmitter()

  handleClickMe() {
    //console.log("clicked")
    this.eventClick.emit('foo')
  }
}

