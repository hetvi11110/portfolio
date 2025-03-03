import { Component, signal } from '@angular/core';
import { BasicInfoComponent } from './about.basicinfo';

@Component({
  selector: 'app-about',
  imports: [BasicInfoComponent],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {
  titleLeft = 'About';
  aboutText = signal({
    firstPara: 'Hello! I am Hetvi Patel.  I have a strong track record of building secure and scalable digital solutions. I specialize in relational and non-relations databases, WordPress development, REST API, JavaScript frameworks, and cloud technologies like Azure. Currently, I’m deepening my expertise in C# and cloud while also contributing to meaningful volunteer projects as a web developer.',
    secondPara: 'What sets me apart is my commitment to truly understanding client needs. With excellent communication skills and a collaborative mindset, I transform concepts into functional, high-quality digital solutions. When I’m not coding or debugging, I’m exploring the latest development trends, to ensure my work remains innovative and forward-thinking.',
  });
  titleRight = 'Basic Information';

  basicInfo = signal<{ label: string; value: string | number }[]>([
    { label: 'Age', value: 29 },
    { label: 'Email', value: 'hetvi.patel.developer@gmail.com' },
    { label: 'Phone', value: '+12269387633' },
    { label: 'Address', value: '204, Hespelar Road, Cambridge, ON, Canada' },
    { label: 'Language', value: 'English, Hindi, Gujarati' }
  ]);
}
