
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectData } from '../../../../app/models/project-data.model';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-project-overlay',
  imports: [CommonModule, TranslateModule],
  templateUrl: './project-overlay.component.html',
  styleUrl: './project-overlay.component.scss'
})
export class ProjectOverlayComponent {
  @Input() project!: ProjectData;
  @Input() allProjects: ProjectData[] = [];
  @Output() changeProject = new EventEmitter<ProjectData>();
  @Output() close = new EventEmitter<void>();

  onCloseClick() {
    this.close.emit();
  }

  ngOnInit() {
    document.documentElement.classList.add('no-scroll');
  }

  ngOnDestroy() {
    document.documentElement.classList.remove('no-scroll');
  }

  onBackdropClick(event: MouseEvent): void {
    this.close.emit();
  }

  nextProject() {
    const currentIndex = this.allProjects.findIndex(p => p.projectNumber === this.project.projectNumber);
    const nextIndex = (currentIndex + 1) % this.allProjects.length;
    this.changeProject.emit(this.allProjects[nextIndex]);
  }
}