/**
 * Nested List Item type interface
 * 
 * @property {T} value Stored data type
 * @property {NestedListItemType<T>[]} children Value's children data
 */
export interface NestedListItemType<T> {
  value: T;
  children?: NestedListItemType<T>[];
}

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
 * @property {boolean} isDegreeProgram Check degree program or others
 * @property {DegreeType} degree Degree info.
 * @property {DurationType} duration Education period.
 * @property {NestedListItemType<string>[]} details Educational achievement details
 */
export interface EducationType {
  institution: string;
  country: string;
  isDegreeProgram: boolean;
  degree?: DegreeType;
  duration: DurationType;
  details: NestedListItemType<string>[];
}

export interface ActivityType {}

export interface AwardType {}

export interface SkillType {}
