import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SingleProjectComponent } from './single-project/single-project.component';
import { ProjectData } from '../models/project-data.model';
import { ProjectOverlayComponent } from './project-overlay/project-overlay.component';
import { TranslateModule } from '@ngx-translate/core';

@Component({
    selector: 'app-projects',
    imports: [CommonModule, SingleProjectComponent, ProjectOverlayComponent, TranslateModule],
    templateUrl: './projects.component.html',
    styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent {


@Input() project!: ProjectData;
@Input() close!: () => void;




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

  onChangeProject(newProject: ProjectData) {
    this.selectedProject = newProject;
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
      usedTechOverlay: [
        {
          imgSource: '../../assets/img/projects/js_green.svg',
          techName: 'JavaScript'
        },
        {
          imgSource: '../../assets/img/projects/html_green.svg',
          techName: 'HTML'
        },
        {
          imgSource: '../../assets/img/projects/css_green.svg',
          techName: 'CSS'
        }
      ],
      additionalInformation: 'Jump, run and throw game...'
    },
    {
      projectTitle: 'Join',
      projectNumber: 2,
      imageSource: 'assets/img/projects/join_preview.png',
      usedTechnologies: ['JavaScript', 'HTML', 'CSS'],
      usedTechOverlay: [
        {
          imgSource: '../../assets/img/projects/js_green.svg',
          techName: 'JavaScript'
        },
        {
          imgSource: '../../assets/img/projects/html_green.svg',
          techName: 'HTML'
        },
        {
          imgSource: '../../assets/img/projects/css_green.svg',
          techName: 'CSS'
        }
      ],
      additionalInformation: 'Task manager inspired...'
    
    },
    {
      projectTitle: 'Portfolio',
      projectNumber: 3,
      imageSource: 'assets/img/projects/portfolio_preview.png',
      usedTechnologies: ['Angular', 'Typescript', 'HTML', 'SCSS'],
      usedTechOverlay: [
        {
          imgSource: '../../assets/img/projects/angular_green.svg',
          techName: 'Angular'
        },
        {
          imgSource: '../../assets/img/projects/ts_green.svg',
          techName: 'TypeScript'
        },
        {
          imgSource: '../../assets/img/projects/html_green.svg',
          techName: 'HTML'
        },
        {
          imgSource: '../../assets/img/projects/css_green.svg',
          techName: 'CSS'
        }
      ],
      additionalInformation: 'Overview about my skills...'
    }
  ];
  
}
