import Section from "@components/molecules/Section";
import { AwardType } from "./types";
import AwardListItem from "./AwardListItem";

/**
 * Achievement Section component props
 * 
 * @property {EducationType[]} items The type of list item in section.
 */
type AchievementSectionProps = {
  items: AwardType[];
};

/**
 * Achievement Section component at Resume page.
 * @param props 
 * @returns {React.FC}
 */
const AchievementSection = (props: AchievementSectionProps) => (
      <Section title="Achievement">
      {props.items.map((item, index) => (
        <AwardListItem key={index} {...item} />
      ))}
    </Section>
);

export default AchievementSection;
