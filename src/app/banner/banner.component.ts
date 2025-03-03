import { Component, signal, computed } from '@angular/core';
import { BannerButtonsComponent} from './banner.buttons';

@Component({
  selector: 'app-banner',
  imports: [BannerButtonsComponent],
  templateUrl: './banner.component.html',
  styleUrl: './banner.component.css'
})
export class BannerComponent {
  firstName = signal('Hetvi');
  lastName = signal('Patel');
  role = signal('Software Developer, Web Developer');

  fullName = computed(() => `${this.firstName()} ${this.lastName()}`);

  totalClicks = { hire: 0, cv: 0 };

  handleButtonClick(event: {type: string, count: number}) {
    if(event.type === 'hire') {
      this.totalClicks.hire = event.count;
    } else {
      this.totalClicks.cv = event.count;
    }

    console.log('Total clicks:');
    console.log('Hire Me:', this.totalClicks.hire);
    console.log('Download CV:', this.totalClicks.cv);
  }
}
