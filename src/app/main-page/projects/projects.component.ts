import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SingleProjectComponent } from './single-project/single-project.component';
import { ProjectData } from '../../models/project-data.model';
import { ProjectOverlayComponent } from './project-overlay/project-overlay.component';
import { TranslateModule } from '@ngx-translate/core';

/**
 * Component that displays a list of projects and handles project overlay logic.
 */
@Component({
  selector: 'app-projects',
  imports: [CommonModule, SingleProjectComponent, ProjectOverlayComponent, TranslateModule],
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent {

  /**
   * The currently selected project.
   * This can be injected from a parent component.
   */
  @Input() project!: ProjectData;

  /**
   * A callback function used to close the current overlay or project.
   */
  @Input() close!: () => void;

  /** The image source of the currently hovered project thumbnail */
  hoveredImage = '';

  /** The vertical position for the project preview overlay */
  previewTopPosition = 0;

  /** The currently selected project shown in the overlay */
  selectedProject: ProjectData | null = null;

  /**
   * Called when a project image is hovered.
   * Sets the image preview and its position.
   * 
   * @param imageSrc - The source of the hovered image
   * @param index - The index of the hovered project
   */
  onHover(imageSrc: string, index: number): void {
    this.hoveredImage = imageSrc;
    this.previewTopPosition = index * 70;
  }

  /**
   * Opens the overlay for the given project.
   * 
   * @param project - The project to show in the overlay
   */
  openOverlay(project: ProjectData): void {
    this.selectedProject = project;
  }

  /**
   * Changes the selected project (used when navigating between projects in the overlay).
   * 
   * @param newProject - The new project to display
   */
  onChangeProject(newProject: ProjectData): void {
    this.selectedProject = newProject;
  }

  /**
   * Closes the overlay and clears the selected project.
   */
  closeOverlay(): void {
    this.selectedProject = null;
  }

  /**
   * List of all available project data to display.
   */
  projectsData: ProjectData[] = [
    {
      projectTitle: 'El Polo Loco',
      githubLink: 'https://github.com/bethmannRolf/el_pollo_loco',
      pageLink: 'https://el-pollo-loco.rolf-bethmann.de/index.html',
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
      githubLink: 'https://github.com/bethmannRolf/join_firebase',
      pageLink: 'https://join.rolf-bethmann.de/assets/templates/index.html',
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
      githubLink: 'https://github.com/bethmannRolf/portfolio',
      pageLink: 'https://rolf-bethmann.de',
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