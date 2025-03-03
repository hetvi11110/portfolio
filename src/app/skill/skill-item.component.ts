import { Component, input  } from '@angular/core';
import { UpperCasePipe } from '@angular/common';

@Component({
  selector: 'app-skill-item',
  imports: [UpperCasePipe],
  template: `
 <div class="progress-container progress-primary">
      <span class="progress-badge">{{ name() | uppercase }}</span>
      <div class="progress">
        <div
          class="progress-bar progress-bar-primary"
          [style.width.%]="percentage()"
        ></div>
        <span class="progress-value">{{ percentage() }}%</span>
      </div>
    </div>
`,
styleUrl: './skill.component.css'
})
export class SkillItemComponent {
  name = input.required<string>();
  percentage = input.required<number>();
}
