import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-banner-buttons',
  template: `
      <a class="btn btn-primary" href="#contact" (click)="onHireMeClick($event)">Hire Me</a>
      <a class="btn btn-primary" href="#" (click)="onDownloadCvClick($event)">Download CV</a>
  `,
  styles: [`
       .btn,
      .navbar .navbar-nav > a.btn {
        border-width: 2px;
        font-weight: 400;
        font-size: 0.8571em;
        line-height: 1.35em;
        margin: 5px 1px;
        border: none;
        border-radius: 0.1875rem;
        padding: 11px 22px;
        cursor: pointer;
        background-color: #888;
        color: #FFFFFF; }
      .btn-primary {
        background-color: #378C3F;
        color: #FFFFFF; }

  `]
})

export class BannerButtonsComponent {

  @Output() buttonClicked = new EventEmitter<{type: string, count: number}>();
  hireCount = 0;
  cvCount = 0;

  onHireMeClick(event: Event) {
    event.preventDefault();
    this.hireCount++;
    this.buttonClicked.emit({type: 'hire', count: this.hireCount});
  }

  onDownloadCvClick(event: Event) {
    event.preventDefault();
    this.cvCount++;
    this.buttonClicked.emit({type: 'cv', count: this.cvCount});
  }
}
