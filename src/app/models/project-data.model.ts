import { TechOverlay } from './tech-overlay.model';

export interface ProjectData {
  projectTitle: string;
  projectNumber: number;
  imageSource: string;
  usedTechnologies: string[]; 
  usedTechOverlay: TechOverlay[];
  additionalInformation: string;
}
