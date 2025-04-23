import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SingleProjectComponent } from './single-project/single-project.component';
import { ProjectData } from '../models/project-data.model';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule, SingleProjectComponent],
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']

})
export class ProjectsComponent {
  projectsData: ProjectData[] = [
    {
      projectTitle: 'El Polo Loco',
      imageSource: 'assets/img/projects/epl_preview.png',
      usedTechnologies: 'JavaScript HTML CSS',
      additionalInformation: 'Jump, run and throw game based on object-oriented approach. Help Pepe to find coins and tabasco salsa to fight against the crazy hen.'
    },
    {
      projectTitle: 'Join',
      imageSource: 'assets/img/projects/join_preview.png',
      usedTechnologies: 'JavaScript HTML CSS',
      additionalInformation: 'Task manager inspired by the Kanban System. Create and organize tasks using drag and drop functions, assign users and categories. '
    }
  ];
}
