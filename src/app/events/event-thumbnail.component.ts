import { Component, Input, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-event-thumbnail',
  template: `
    <div class="well hoverwell thumbnail">
    <h2 *ngIf = "event.name">{{event?.name}}</h2>
    <div *ngIf = "event.date">date: {{event?.date}}</div>
    <div [ngClass]="{green: event?.time == '8:00 am',bold:event?.time=='8:00 am'}"
    [ngSwitch]="event?.time">Time: {{event?.time}}
    <span *ngSwitch="'8:00 am'">(early start)</span>
    <span *ngSwitch="'10:00 am'">(late start)</span>
    <span *ngSwitchDefault>(normal start)</span>
    </div>
    <div *ngIf = "event.name">time:{{event?.time}}</div>
    <div *ngIf = "event.price">price: \${{event?.price}}</div>
    <div *ngIf = "event?.location">
    <span>Location: {{event?.location?.address}}</span>
    <span>{{event?.location?.city}}, {{event?.location?.country}}</span>
    </div>
    <div [hidden]= "!event.onlineUrl">
      online URL: {{event?.onlineUrl}}
    <div>
    </div>
  `,
  styles: [`
    .thumbnail { min-height: 210px; }
    .pad-left { margin-left: 10px; }
    .well div { color: #bbb; }
    `
    ]
})
export class EventThumbnailComponent {

  @Input() event:any
  @Output() eventClick = new EventEmitter()

  handleClickMe() {
    this.eventClick.emit(this.event.name)
  }
}

