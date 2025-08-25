import { Component, Input, Output, EventEmitter } from '@angular/core';
import { ProjectData } from '../../../../app/models/project-data.model';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-single-project',
  imports: [CommonModule, TranslateModule],
  templateUrl: './single-project.component.html',
  styleUrl: './single-project.component.scss'
})
/**
 * Component representing a single project preview.
 * Displays summary information and emits an event when clicked to show full details in an overlay.
 */
export class SingleProjectComponent {

  /**
   * The project data to be displayed.
   * @type {ProjectData}
   */
  @Input() project!: ProjectData;

  /**
   * Event emitted when the project is selected (e.g. clicked) to open the overlay.
   * @event
   */
  @Output() projectSelected = new EventEmitter<ProjectData>();

  /**
   * Emits the selected project via the projectSelected event.
   */
  openOverlay() {
    this.projectSelected.emit(this.project);
  }
}