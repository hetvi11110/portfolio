import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { BannerComponent } from './banner/banner.component';
import { AboutComponent } from './about/about.component';
import { SkillComponent } from './skill/skill.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { ExperienceComponent } from "./experience/experience.component";
import { EducationComponent } from './education/education.component';
import { ContactComponent } from './contact/contact.component';
import { FooterComponent } from './footer/footer.component';

@Component({
  selector: 'app-root',
  imports: [NavbarComponent, BannerComponent, AboutComponent, SkillComponent, PortfolioComponent, ExperienceComponent, EducationComponent, ContactComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'portfolio';
}
