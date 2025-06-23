import { TechOverlay } from './tech-overlay.model';

export interface ProjectData {
  projectTitle: string;
  githubLink:string;
  projectNumber: number;
  imageSource: string;
  usedTechnologies: string[]; 
  usedTechOverlay: TechOverlay[];
  additionalInformation: string;
}
