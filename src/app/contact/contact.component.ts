import { Component, inject } from '@angular/core';
import { ContactInfoService } from '../contact-info.service';

@Component({
  selector: 'app-contact',
  imports: [],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {
    contactInfo = inject(ContactInfoService);
}
