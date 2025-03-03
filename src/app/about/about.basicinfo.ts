import { Component, input } from '@angular/core';

@Component({
  selector: 'app-basic-info',
  template: `
      @for (info of basicInfo(); track info.label) {
        <div class="row" [class.mt-3]="!$first">
          <div class="col-sm-4">
            <strong class="text-uppercase">{{ info.label }}:</strong>
          </div>
          <div class="col-sm-8">{{ info.value }}</div>
        </div>
      }
  `
})
export class BasicInfoComponent {
  basicInfo = input<{ label: string; value: string | number }[]>();
}
