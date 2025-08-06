import { TechOverlay } from './tech-overlay.model';

/**
 * Represents all relevant data for a single project in the portfolio.
 */
export interface ProjectData {
  /**
   * The title of the project.
   */
  projectTitle: string;

  /**
   * The URL to the GitHub repository of the project.
   */
  githubLink: string;

  /**
   * The live URL to the deployed project page.
   */
  pageLink: string;

  /**
   * The internal number or order of the project (used for sorting or referencing).
   */
  projectNumber: number;

  /**
   * The source path or URL of the project preview image.
   */
  imageSource: string;

  /**
   * A list of technologies used in the project (e.g., ['Angular', 'Firebase']).
   */
  usedTechnologies: string[];

  /**
   * A list of technology overlays, containing detailed information about each technology used.
   */
  usedTechOverlay: TechOverlay[];

  /**
   * Additional descriptive information about the project (used for modals or detail views).
   */
  additionalInformation: string;
}