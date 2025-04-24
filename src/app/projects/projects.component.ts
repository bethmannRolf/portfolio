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


  hoveredImage: string = '';


  projectsData: ProjectData[] = [
    {
      projectTitle: 'El Polo Loco',
      imageSource: 'assets/img/projects/epl_preview.png',
      usedTechnologies: ['JavaScript', 'HTML', 'CSS'],
      additionalInformation: 'Jump, run and throw game...'
    },
    {
      projectTitle: 'Join',
      imageSource: 'assets/img/projects/join_preview.png',
      usedTechnologies: ['JavaScript', 'HTML', 'CSS'],
      additionalInformation: 'Task manager inspired...'
    },
    {
      projectTitle: 'Portfolio',
      imageSource: 'assets/img/projects/portfolio_preview.png',
      usedTechnologies: ['Angular', 'Typescript', 'HTML', 'SCSS'],
      additionalInformation: 'Overview about my skills...'
    }
  ];
  
}
