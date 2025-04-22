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
    { projectTitle: 'El Polo Loco' , imageSource: '', usedTechnologies: 'JavaScript'+ 'HTML' + 'CSS', additionalInformation:'Jump, run and throw game based on object-oriented approach. Help PEpe to find coins and tabasco salsa to fight against the crazy hen.' },
    { projectTitle: 'Join', imageSource: '' , usedTechnologies: 'JavaScript' +'Objektorientierung' + 'HTML' + 'CSS', additionalInformation:'Task manager inspired by the Kanban System. Create and organize tasks using drag and drop functions, assign users and categories.'  },
    { projectTitle: 'Portfolio' , imageSource: '', usedTechnologies: 'Angular' + 'TypeScript' + 'HTML' + 'SCSS', additionalInformation:''  }
  
    ];
    
showProjectPreview(){

}

showSingleProject(){



}


}
