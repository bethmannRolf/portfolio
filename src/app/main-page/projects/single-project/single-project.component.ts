import { Component, Input, Output, EventEmitter,  } from '@angular/core';
import { ProjectData } from '../../../../app/models/project-data.model';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

@Component({
    selector: 'app-single-project',
    imports: [CommonModule, TranslateModule],
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