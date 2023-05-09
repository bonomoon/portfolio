import { ReactNode } from "react";

/**
 * @typedef {object} SectionLinkProps Section link component props
 * @property {string} value href
 * @property {string} name link name
 */
type SectionLinkProps = {
  value: string;
  name?: string;
};

/**
 * @typedef {object}SectionProps Section component props
 * @property {string} title
 * @property {SectionLinkProps} link
 * @property {ReactNode} children 
 */
type SectionProps = {
  title: string;
  link?: SectionLinkProps;
  children: ReactNode;
};

/**
 * Page section component.
 *
 * @param {SectionProps} props
 * @returns {JSX.Element}
 */
const Section = (props: SectionProps) => (
  <div>
    <div>{props.title}</div>
  </div>
);

export default Section;
