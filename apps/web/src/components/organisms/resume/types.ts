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

export interface ActivityType {}

export interface AwardType {}

export interface EducationType {}

export interface SkillType {}
