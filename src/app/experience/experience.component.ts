import { Component, signal } from '@angular/core';
import { ExperienceCardComponent } from './experience-card.component';

@Component({
  selector: 'app-experience',
  imports: [ExperienceCardComponent],
  templateUrl: './experience.component.html'
})
export class ExperienceComponent {
  title = 'Work Experience';
  experiences = signal([
    signal({
      year: '2024 - Current',
      company: 'JS Consultancy Services',
      designation: 'Web Developer',
      description: 'Developed a JavaScript library scraper package using Node.js and PostgreSQL,streamlining data extraction and improving efficiency. Documented technical guide for a JavaScript web scraper library, detailing setup, configuration, and usage instructions for seamless integration..'
    }),
    signal({
      year: '2019 - 2023',
      company: 'Uplers',
      designation: 'Web Developer',
      description: 'As a Web Developer at Uplers, I specialized in back-end development, designing and implementing custom solutions to meet client-specific requirements. My work focused on building secure, efficient, and scalable websites that powered seamless user experiences.'
    }),
    signal({
      year: '2017 - 2019',
      company: 'eSparkBiz Technologies Private Limited',
      designation: 'Web Developer',
      description: 'During my tenure at eSparkBiz, I led the development of various websites. My primary focus was on the back end, leveraging the WordPress CMS to deliver custom, scalable solutions that catered to client-specific needs. Additionally, I guided and mentored junior developers, helping them grow their skills and ensuring that best practices were followed across projects.'
    })
  ]);

}
