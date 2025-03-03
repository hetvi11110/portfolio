import { Component, Input, Signal } from '@angular/core';

@Component({
  selector: 'app-experience-card',
  template: `
        <div class="card">
      <div class="row">
        <div class="col-md-3 bg-primary">
          <div class="card-body cc-experience-header">
            <p>{{ experience().year }}</p>
            <div class="h5">{{ experience().company }}</div>
          </div>
        </div>
        <div class="col-md-9">
          <div class="card-body">
            <div class="h5">{{ experience().designation }}</div>
            <p>{{ experience().description }}</p>
          </div>
        </div>
      </div>
    </div>
    `,
    styleUrl: './experience.component.css'
})
export class ExperienceCardComponent {
  @Input({ required: true }) experience!: Signal<{
    year: string;
    company: string;
    designation: string;
    description: string;
  }>;
}
