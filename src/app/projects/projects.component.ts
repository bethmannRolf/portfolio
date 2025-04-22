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
    { projectTitle: 'El Polo Loco' , imageSource: '../../assets/img/projects/epl_preview.png', usedTechnologies: 'JavaScript'+ 'HTML' + 'CSS', additionalInformation:'Jump, run and throw game based on object-oriented approach. Help PEpe to find coins and tabasco salsa to fight against the crazy hen.' },
    { projectTitle: 'Join', imageSource: '../../assets/img/projects/join_preview.png' , usedTechnologies: 'JavaScript' +'Objektorientierung' + 'HTML' + 'CSS', additionalInformation:'Task manager inspired by the Kanban System. Create and organize tasks using drag and drop functions, assign users and categories.'  },
    { projectTitle: 'Portfolio' , imageSource: '../../assets/img/projects/portfolio_preview.png', usedTechnologies: 'Angular' + 'TypeScript' + 'HTML' + 'SCSS', additionalInformation:''  }
  
    ];
    
showProjectPreview(){

}

showSingleProject(){



}


}
