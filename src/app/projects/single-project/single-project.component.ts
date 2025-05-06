import { Component, Input, Output, EventEmitter,  } from '@angular/core';
import { ProjectData } from '../../../app/models/project-data.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-single-project',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './single-project.component.html',
  styleUrl: './single-project.component.scss'
})
export class SingleProjectComponent {
  @Input() project!: ProjectData;
  @Output() projectSelected = new EventEmitter<ProjectData>();

  openOverlay() {
    this.projectSelected.emit(this.project);
  }
}
