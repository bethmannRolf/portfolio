import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SingleProjectComponent } from './single-project/single-project.component';
import { ProjectData } from '../../models/project-data.model';
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
    this.previewTopPosition = index * 70;
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
      githubLink:'https://github.com/bethmannRolf/el_pollo_loco',
      pageLink:'https://el-pollo-loco.rolf-bethmann.de/index.html',
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
      additionalInformation: 'PROJECTS.SINGLE_PROJECT.EPL.ABOUT_CONTENT'
    },
    {
      projectTitle: 'Join',
      githubLink:'https://github.com/bethmannRolf/join_firebase',
      pageLink:'https://join.rolf-bethmann.de/assets/templates/index.html',
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
      additionalInformation: 'PROJECTS.SINGLE_PROJECT.JOIN.ABOUT_CONTENT'
    
    },
    {
      projectTitle: 'Portfolio',
      githubLink:'https://github.com/bethmannRolf/portfolio',
      pageLink:'https://rolf-bethmann.de',
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
      additionalInformation: 'PROJECTS.SINGLE_PROJECT.PORTFOLIO.ABOUT_CONTENT'
    }
  ];
}