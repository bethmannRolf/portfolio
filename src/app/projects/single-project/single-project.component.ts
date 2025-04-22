import { CommonModule } from '@angular/common';
import { ProjectData } from '../../../app/models/project-data.model';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-single-project',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './single-project.component.html',
  styleUrl: './single-project.component.scss'
})
export class SingleProjectComponent {
  @Input() project!: ProjectData;
}
