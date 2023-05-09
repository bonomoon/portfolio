import Section from "@components/molecules/Section";
import { ActivityType } from "./types";
import ActivityListItem from "./ActivityListItem";

/**
 * Activity Section component props
 * 
 * @property {ActivityType[]} items The type of list item in section.
 */
type ActivitySectionProps = {
  items: ActivityType[];
};

/**
 * Activity Section component at Resume page.
 * 
 * @param props 
 * @returns {React.FC}
 */
const ActivitySection = (props: ActivitySectionProps) => (
  <Section title="Activity">
    {props.items.map((item, index) => (
        <ActivityListItem key={index} {...item} />
      ))}
  </Section>
);

export default ActivitySection;
