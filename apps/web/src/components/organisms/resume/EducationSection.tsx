import Section from "@components/molecules/Section";
import { EducationType } from "./types";
import EducationListItem from "./EducationListItem";

/**
 * Education Section component props
 * 
 * @property {EducationType[]} items The type of list item in section.
 */
type EducationSectionProps = {
  items: EducationType[];
};

/**
 * Education Section component at Resume page.
 * @param props 
 * @returns {React.FC}
 */
const EducationSection = (props: EducationSectionProps) => (
  <Section title="Education">
    {props.items.map((item, index) => (
      <EducationListItem key={index} {...item} />
    ))}
  </Section>
);

export default EducationSection;
