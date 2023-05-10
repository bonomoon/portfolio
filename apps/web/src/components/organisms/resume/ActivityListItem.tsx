import ResumeListItem from "./ResumeListItem";
import { ActivityType } from "./types";

/**
 * Create Activity List Item Title
 * 
 * @param name Activity name.
 * @param description Activity description.
 * @param organization
 * @returns 
 */
const createActivityHeaderTitle = (
  name: string,
  description?: string,
  organization?: string
) =>
  name +
  (description ? ", " + description : "") +
  (organization ? ", " + organization : "");

/**
 * Activity List Item.
 * 
 * @param props 
 * @returns {React.FC}
 */
const ActivityListItem: React.FC<ActivityType> = ({
  name,
  description,
  organization,
  duration,
  details,
}) => (
  <ResumeListItem
    title={createActivityHeaderTitle(name, description, organization)}
    duration={duration}
    details={details}
  />
);

export default ActivityListItem;
