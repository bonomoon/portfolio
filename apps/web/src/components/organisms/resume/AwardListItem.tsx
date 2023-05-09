import { AwardType } from "./types";
import ResumeListItem from "./ResumeListItem";

/**
 * Create award list item title.
 * 
 * @param prize prize name.
 * @param contest contest name.
 * @returns new title.
 */
const createAwardTitle = (prize: string, contest: string) =>
  prize + ", " + contest;

/**
 * Award List Item.
 * 
 * @param props 
 * @returns {React.FC}
 */
const AwardListItem: React.FC<AwardType> = ({
  prize,
  contest,
  awardedAt,
  organization,
  details,
}) => (
  <ResumeListItem
    title={createAwardTitle(prize, contest)}
    label={organization}
    duration={awardedAt}
    details={details}
  />
);

export default AwardListItem;
