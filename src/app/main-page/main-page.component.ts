import { Component } from '@angular/core';
import { AtfComponent } from './atf/atf.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { SkillsComponent } from './skills/skills.component';
import { ProjectsComponent } from './projects/projects.component';
import { ContactComponent } from './about-me/contact/contact.component';
import { QuotationsComponent } from './quotations/quotations.component';
import { FooterComponent } from '../shared/footer/footer.component';

@Component({
  selector: 'app-main-page',
  imports: [ AtfComponent, AboutMeComponent, SkillsComponent, ProjectsComponent, ContactComponent,QuotationsComponent, FooterComponent],
  templateUrl: './main-page.component.html',
  styleUrl: './main-page.component.scss'
})
export class MainPageComponent {

}
