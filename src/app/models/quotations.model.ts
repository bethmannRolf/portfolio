/**
 * Represents a single quotation or testimonial.
 */
export interface Quotation {
  /**
   * The actual quotation text.
   */
  text: string;

  /**
   * The name of the person who gave the quotation.
   */
  name: string;

  /**
   * The position or role of the person (e.g., 'Team Lead', 'Client').
   */
  position: string;
}