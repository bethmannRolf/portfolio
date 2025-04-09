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


// images: string[] = [
//   '../../assets/img/technologies/html.svg',
//   '../../assets/img/technologies/css.svg',
//   '../../assets/img/technologies/javascript.svg',
//   '../../assets/img/technologies/material_design.svg',
//   '../../assets/img/technologies/typescript.svg',
//   '../../assets/img/technologies/angular.svg',
//   '../../assets/img/technologies/firebase.svg',
//   '../../assets/img/technologies/git.svg',
//   '../../assets/img/technologies/rest-api.svg',
//   '../../assets/img/technologies/scrum.svg'
// ]

images = [
{ src: '../../assets/img/technologies/html.svg', title: 'HTML' },
{ src: '../../assets/img/technologies/css.svg', title: 'CSS' },
{ src: '../../assets/img/technologies/javascript.svg', title: 'JavaScript' },
{ src: '../../assets/img/technologies/material_design.svg', title: 'Material Design' },
{ src: '../../assets/img/technologies/typescript.svg', title: 'TypeScript' },
{ src: '../../assets/img/technologies/angular.svg', title: 'Angular' },
{ src: '../../assets/img/technologies/firebase.svg', title: 'Firebase' },
{ src: '../../assets/img/technologies/git.svg', title: 'GIT' },
{ src: '../../assets/img/technologies/rest-api.svg', title: 'Res-Api' },
{ src: '../../assets/img/technologies/scrum.svg', title: 'Scrum' },
{ src: '../../assets/img/technologies/growth_mindset.svg', title: 'Growth Mindset' }
];



}
