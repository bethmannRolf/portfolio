import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SingleProjectComponent } from './single-project/single-project.component';
import { ProjectData } from '../models/project-data.model';
import { ProjectOverlayComponent } from './project-overlay/project-overlay.component';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule, SingleProjectComponent, ProjectOverlayComponent],
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent {

//new for open and close overlay
@Input() project!: ProjectData;
@Input() close!: () => void;

////////////////////////


  hoveredImage: string = '';
  previewTopPosition: number = 0;



  onHover(imageSrc: string, index: number): void {
    this.hoveredImage = imageSrc;
    this.previewTopPosition = index * 100;
  }

  selectedProject: ProjectData | null = null;

  openOverlay(project: ProjectData) {
    this.selectedProject = project;
  }
  
  closeOverlay() {
    this.selectedProject = null;
  }
  

  projectsData: ProjectData[] = [
    {
      projectTitle: 'El Polo Loco',
      projectNumber: 1,
      imageSource: 'assets/img/projects/epl_preview.png',
      usedTechnologies: ['JavaScript', 'HTML', 'CSS'],
      additionalInformation: 'Jump, run and throw game...'
    },
    {
      projectTitle: 'Join',
      projectNumber: 2,
      imageSource: 'assets/img/projects/join_preview.png',
      usedTechnologies: ['JavaScript', 'HTML', 'CSS'],
      additionalInformation: 'Task manager inspired...'
    },
    {
      projectTitle: 'Portfolio',
      projectNumber: 3,
      imageSource: 'assets/img/projects/portfolio_preview.png',
      usedTechnologies: ['Angular', 'Typescript', 'HTML', 'SCSS'],
      additionalInformation: 'Overview about my skills...'
    }
  ];
}
