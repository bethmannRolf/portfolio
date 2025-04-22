import { Component } from '@angular/core';
import { SingleProjectComponent } from './single-project/single-project.component';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [SingleProjectComponent],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {


 projectsData = [
    { projectTitle: 'El Polo Loco ' , imageSource: '', usedTechnologies: 'JavaScript'+ 'HTML' + 'CSS' },
    { projectTitle: 'Join', imageSource: '' , usedTechnologies: 'JavaScript' +'Objektorientierung' + 'HTML' + 'CSS' },
    { projectTitle: 'Portfolio' , imageSource: '', usedTechnologies: 'Angular' + 'TypeScript' + 'HTML' + 'SCSS' }
  
    ];
    
showProjectPreview(){

}

showSingleProject(){



}



}
