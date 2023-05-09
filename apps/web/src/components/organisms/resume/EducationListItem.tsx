import ResumeListItem from "./ResumeListItem";
import { EducationType } from "./types";

/**
 * Create education title.
 * 
 * @param institution Educational organization name.
 * @param country
 * @returns 
 */
const createEducationTitle = (institution: string, country: string) =>
  institution + ", " + country;

/**
 * Education List Item.
 * 
 * @param props 
 * @returns {React.FC}
 */
const EducationListItem: React.FC<EducationType> = ({
  institution,
  country,
  isDegreeProgram,
  degree,
  duration,
  details,
}) => {
  // Create degree text.
  const _degree = () => `Degree: ${duration.isCompleted && "Pursuing"} ${degree?.name}'s degree in ${degree?.major}`;

  // Create GPA text.
  const _gpa = () => `GPA: ${degree?.gpa.score } / ${degree?.gpa.maxScore}`;

  return (
    <ResumeListItem
      title={createEducationTitle(institution, country)}
      description={isDegreeProgram ? _degree() + " | " + _gpa() : ""}
      duration={duration}
      details={details}
    />
  );
};

export default EducationListItem;