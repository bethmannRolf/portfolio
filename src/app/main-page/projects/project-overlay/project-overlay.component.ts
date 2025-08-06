import { Component, Input, Output, EventEmitter, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectData } from '../../../../app/models/project-data.model';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-project-overlay',
  imports: [CommonModule, TranslateModule],
  templateUrl: './project-overlay.component.html',
  styleUrl: './project-overlay.component.scss'
})
/**
 * Overlay component that displays detailed information about a selected project.
 * It allows navigation to the next project and closing the overlay.
 */
export class ProjectOverlayComponent implements OnInit, OnDestroy {
  /**
   * The currently selected project to display.
   * @type {ProjectData}
   */
  @Input() project!: ProjectData;

  /**
   * List of all available projects used for navigation.
   * @type {ProjectData[]}
   */
  @Input() allProjects: ProjectData[] = [];

  /**
   * Emits an event when the user wants to switch to another project.
   * @event
   */
  @Output() changeProject = new EventEmitter<ProjectData>();

  /**
   * Emits an event when the overlay should be closed.
   * @event
   */
  @Output() close = new EventEmitter<void>();

  /**
   * Emits the close event to close the overlay.
   */
  onCloseClick() {
    this.close.emit();
  }

  /**
   * Lifecycle hook that adds a CSS class to prevent scrolling of the main document
   * while the overlay is open.
   */
  ngOnInit() {
    document.documentElement.classList.add('no-scroll');
  }

  /**
   * Lifecycle hook that removes the no-scroll class when the overlay is destroyed.
   */
  ngOnDestroy() {
    document.documentElement.classList.remove('no-scroll');
  }

  /**
   * Handles clicks on the backdrop and emits the close event.
   * @param {MouseEvent} event - The mouse click event
   */
  onBackdropClick(event: MouseEvent): void {
    this.close.emit();
  }

  /**
   * Selects the next project in the list and emits the changeProject event.
   */
  nextProject() {
    const currentIndex = this.allProjects.findIndex(p => p.projectNumber === this.project.projectNumber);
    const nextIndex = (currentIndex + 1) % this.allProjects.length;
    this.changeProject.emit(this.allProjects[nextIndex]);
  }
}