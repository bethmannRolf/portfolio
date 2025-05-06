
import { TechOverlay } from './tech-overlay.model';

export interface ProjectData {
  projectTitle: string;
  projectNumber: number;
  imageSource: string;
  usedTechnologies: string[]; // <- hier die Änderung
  usedTechOverlay: TechOverlay[];
  additionalInformation: string;
}
