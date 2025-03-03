import { Component, signal } from '@angular/core';
import { EducationCardComponent } from './education-card.component';

@Component({
  selector: 'app-education',
  imports: [EducationCardComponent],
  templateUrl: './education.component.html'
})
export class EducationComponent {
  title = 'Education';
  educationList = signal([
    signal({
      year: '2009 - 2013',
      degree: "Bachelor's Degree",
      field: 'Bachelor of Computer Engineering',
      institution: 'Gujarat Technological University',
      description: 'During my Bachelor degree in Computer Engineering for an academy project, I applied my knowledge in full-stack development by creating a platform enabling users to register and book services such as cleaning, plumbing, and carpentry. This involved both front-end and back-end development using PHP, jQuery, AJAX, MySQL, HTML, and CSS. '
    }),
    signal({
      year: '2010 - 2013',
      degree: 'High School',
      field: 'Kameshwar Vidhyavihar',
      institution: 'School of Secondary Board',
      description: 'Science and Mathematics'
    })
  ]);
}
