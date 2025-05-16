import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ScrollService } from "../core/scroll.service";
import { TranslateModule } from '@ngx-translate/core';

@Component({
    selector: 'app-skills',
    imports: [CommonModule, TranslateModule],
    templateUrl: './skills.component.html',
    styleUrl: './skills.component.scss'
})
export class SkillsComponent {

  constructor(private scrollService: ScrollService) {}

scrollToSection(sectionId: string) {
  this.scrollService.scrollTo(sectionId);
}


images = [
{ src: '../../assets/img/technologies/html.svg', title: 'HTML' },
{ src: '../../assets/img/technologies/css.svg', title: 'CSS' },
{ src: '../../assets/img/technologies/javascript.svg', title: 'JavaScript' },
{ src: '../../assets/img/technologies/material_design.svg', title: 'Material Design' },
{ src: '../../assets/img/technologies/typescript.svg', title: 'TypeScript' },
{ src: '../../assets/img/technologies/angular.svg', title: 'Angular' },
{ src: '../../assets/img/technologies/firebase.svg', title: 'Firebase' },
{ src: '../../assets/img/technologies/git.svg', title: 'GIT' },
{ src: '../../assets/img/technologies/rest-api.svg', title: 'Rest-Api' },
{ src: '../../assets/img/technologies/scrum.svg', title: 'Scrum' },
{ src: '../../assets/img/technologies/growth_mindset.svg', title: 'Growth Mindset' }
];


imagesGrowth = [
  { src: '../../assets/img/technologies/react.svg', title: 'React' },
  { src: '../../assets/img/technologies/vue.svg', title: 'Vue' },

  ];
  






}
