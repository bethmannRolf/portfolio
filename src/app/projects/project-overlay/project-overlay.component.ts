
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectData } from '../../../app/models/project-data.model';
import { ProjectsComponent } from '../projects.component';
@Component({
  selector: 'app-project-overlay',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './project-overlay.component.html',
  styleUrl: './project-overlay.component.scss'
})
export class ProjectOverlayComponent {
  @Input() project!: ProjectData;
  @Output() close = new EventEmitter<void>();

  onCloseClick() {
    this.close.emit();
  }
}
