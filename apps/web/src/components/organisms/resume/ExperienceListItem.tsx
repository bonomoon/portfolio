import ResumeListItem from "./ResumeListItem";
import { ExperienceType } from "./types";

const ExperienceListItem: React.FC<ExperienceType> = ({
  company,
  job,
  duration,
  details,
}) => (
  <ResumeListItem
    title={company}
    label={job}
    duration={duration}
    details={details}
    horizontal
  />
);

export default ExperienceListItem;
