import Section from "@components/molecules/Section";
import { ExperienceType } from "./types";
import ExperienceListItem from "./ExperienceListItem";

/**
 * Experience Section component props
 * 
 * @property {ExperienceType[]} items The type of list item in section.
 */
type ExperienceSectionProps = {
  items: ExperienceType[];
};

/**
 * Experience Section component at Resume page.
 * 
 * @param props 
 * @returns {React.FC}
 */
const ExperienceSection = (props: ExperienceSectionProps) => (
  <Section title="Experience">
    {props.items.map((item, index) => (
      <ExperienceListItem key={index} {...item} />
    ))}
  </Section>
);

export default ExperienceSection;
