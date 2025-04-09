import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss'
})
export class SkillsComponent {


images: string[] = [
  '../../assets/img/technologies/html.svg',
  '../../assets/img/technologies/css.svg',
  '../../assets/img/technologies/javascript.svg',
  '../../assets/img/technologies/material_design.svg',
  '../../assets/img/technologies/typescript.svg',
  '../../assets/img/technologies/angular.svg',
  '../../assets/img/technologies/firebase.svg',
  '../../assets/img/technologies/git.svg',
  '../../assets/img/technologies/rest-api.svg',
  '../../assets/img/technologies/scrum.svg'



]



}
