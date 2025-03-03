import { Component, Input, Signal } from '@angular/core';

@Component({
  selector: 'app-education-card',
  template: `
    <div class="card">
  <div class="row">
    <div class="col-md-3 bg-primary">
      <div class="card-body cc-education-header">
        <p>{{ education().year }}</p>
        <div class="h5">{{ education().degree }}</div>
      </div>
    </div>
    <div class="col-md-9">
      <div class="card-body">
        <div class="h5">{{ education().field }}</div>
        <p class="category">{{ education().institution }}</p>
        <p>{{ education().description }}</p>
      </div>
    </div>
  </div>
</div>
    `,
    styleUrl: './education.component.css'
})
export class EducationCardComponent {
  @Input({ required: true }) education!: Signal<{
    year: string;
    degree: string;
    field: string;
    institution: string;
    description: string;
  }>;
}
