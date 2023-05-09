import {
  DurationType,
  NestedListItemType,
} from "@components/organisms/resume/types";

/**
 * Resume list item component props.
 * 
 * @property {string} title A title of list item.
 * @property {string} label A label text of list item.
 * @property {Date | DurationType} duration Something period.
 * @property {string} description Additional description.
 * @property {NestedListItemType<string>[]} details a details of something.
 */
type ResumeListItemProps = {
  title: string;
  label?: string;
  duration: Date | DurationType;
  description?: string;
  details: NestedListItemType<string>[];
};

/**
 * Default list item for resume.
 * 
 * @param {ResumeListItemProps}
 * @returns {React.FC}
 */
const ResumeListItem: React.FC<ResumeListItemProps> = ({
  title,
  label = "",
  duration,
  description,
  details,
}) => (
  <div>
    {title}
    {description}
    {label}
  </div>
);

export default ResumeListItem;
