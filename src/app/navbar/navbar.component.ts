import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  imports: [],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  title = 'Hetvi';
  navigation = [
    { id: 1, link: '#about', title: 'About' },
    {  id: 2, link: '#skill', title: 'Skills' },
    {  id: 3, link: '#experience', title: 'Experience' },
    {  id: 4, link: '#contact', title: 'Contact' },
  ];
}
