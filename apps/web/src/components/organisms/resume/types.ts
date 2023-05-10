import { NestedListItemType } from "../NestedList";

/**
 * Duration type interface.
 *
 * @property {Date} startedAt A date which start doing something from a specific point.
 * @property {Date} endedAt A date which end doing something.
 * @property {boolean} isCompleted If you don't complete something, isCompleted should be false(endedAt will be 'Present'), or not.
 */
export interface DurationType {
  startedAt: Date;
  endedAt?: Date;
  isCompleted: boolean;
}

/**
 * Experience type interface.
 * 
 * @property {string} company Company name.
 * @property {string} job Job name.
 * @property {DurationType} duration Employment period.
 * @property {NestedListItemType<string>[]} details Work details.
 */
export interface ExperienceType {
  company: string;
  job: string;
  duration: DurationType;
  details: NestedListItemType<string>[];
}

/**
 * GPA type interface
 * 
 * @property {number} score Current score.
 * @property {number} maxScore Maximum score of GPA.
 */
interface GPAType {
  score: number;
  maxScore: number;
}

/**
 * Degree type interface.
 * 
 * @property {string} name The name of degree type.
 * @property {string} major The major of degree.
 * @property {GPAType} gpa GPA
 */
interface DegreeType {
  name: string;
  major: string;
  gpa: GPAType;
}

/**
 * Education type interface.
 * 
 * @property {string} institution Education organization.
 * @property {string} country The location of institution.
 * @property {boolean} isDegreeProgram Check degree program or others.
 * @property {DegreeType} degree Degree info.
 * @property {DurationType} duration Education period.
 * @property {NestedListItemType<string>[]} details Educational achievement details.
 */
export interface EducationType {
  institution: string;
  country: string;
  isDegreeProgram: boolean;
  degree?: DegreeType;
  duration: DurationType;
  details: NestedListItemType<string>[];
}

/**
 * Activity type interface.
 * 
 * @property {string} name Activity's name.
 * @property {string} description Activity's description.
 * @property {string} organization Main organization which take place this activity.
 * @property {DurationType} duration Activity period.
 * @property {NestedListItemType<string>[]} details Activity details.
 */
export interface ActivityType {
  name: string;
  description?: string;
  organization?: string;
  duration: DurationType;
  details: NestedListItemType<string>[];
}

/**
 * Award type interface.
 * 
 * @property {string} prize Prize name.
 * @property {string} contest Contest name.
 * @property {Date} awardedAt A date which you awarded at.
 * @property {string} organization Main organization which take place this event.
 * @property {NestedListItemType<string>[]} details Award details.
 */
export interface AwardType {
  prize: string;
  contest: string;
  awardedAt: Date;
  organization: string;
  details: NestedListItemType<string>[];
}

export interface SkillType {}
