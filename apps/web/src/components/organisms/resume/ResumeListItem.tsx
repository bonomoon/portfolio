import Item, { ItemProps } from "@components/molecules/Item";
import { DurationType } from "@components/organisms/resume/types";
import styled from "styled-components";
import NestedList, { NestedListItemType } from "../NestedList";

/**
 * Styled item header container.
 */
const ItemHeader = styled.div<ItemProps>`
  display: flex;
  align-items: flex-start;
  flex-direction: ${({ horizontal }) => (horizontal ? "column" : "row")};
  width: ${({ horizontal }) => (horizontal ? "20%" : "100%")};
  padding-top: 0.375rem;
  margin-bottom: ${({ horizontal }) => (horizontal ? "0" : "0.25rem")};

  @media (max-width: 768px) {
    flex-direction: column;
    margin-bottom: 0.5rem;
    width: 100%;
  }
`;

/**
 * Styled item body container.
 */
const ItemBody = styled.div<ItemProps>`
  width: ${({ horizontal = false }) => (horizontal ? "80%" : "100%")};
`;

/**
 * Styled item header title.
 */
const ItemHeaderTitle = styled.h5<ItemProps>`
  font-weight: 500;
  margin-bottom: ${({ horizontal }) => (horizontal ? "10px" : "0px")};

  @media (max-width: 768px) {
    margin-bottom: 0.5rem;
  }
`;

/**
 * Styled item header content.
 */
const ItemHeaderInfo = styled.div<ItemProps>`
  display: flex;
  flex-direction: ${({ horizontal }) => (horizontal ? "column" : "row")};
  align-items: ${({ horizontal }) => (horizontal ? "flex-start" : "center")};
  justify-content: center;

  span {
    color: #787878;
    font-weight: 400;
  }

  ${({ horizontal }) =>
    !horizontal &&
    ` span:not(:last-child) {
      padding-right: 0.375rem;
      margin-right: 0.375rem;
      border-right: 1px solid #ccc;
    }`};

  @media (max-width: 768px) {
    flex-direction: row;

    span:not(:last-child) {
      padding-right: 0.375rem;
      margin-right: 0.375rem;
      border-right: 1px solid #ccc;
    }
  }
`;

/**
 * Resume list item component props.
 *
 * @property {string} title A title of list item.
 * @property {string} label A label text of list item.
 * @property {Date | DurationType} duration Something period.
 * @property {string} description Additional description.
 * @property {NestedListItemType<string>[]} details a details of something.
 * @property {boolean} horizontal List item should be horizontal. (default: false)
 */
type ResumeListItemProps = {
  title: string;
  label?: string;
  duration: Date | DurationType;
  description?: string;
  details: NestedListItemType<string>[];
  horizontal?: boolean;
};

/**
 * Convert Date type to string.
 * 
 * @param date date data
 * @returns string
 */
const formatDate = (date: Date = new Date()) => {
  const month = date.getMonth() + 1;
  const formattedMonth = month >= 10 ? month : "0" + month;

  return date.getFullYear() + "." + formattedMonth;
};

/**
 * Create duration header text.
 * 
 * @param duration period or date.
 * @returns duration text.
 */
const createHeaderInfoDuration = (duration: Date | DurationType) =>
  duration instanceof Date
    ? formatDate(duration)
    : duration.startedAt.getTime() === duration.endedAt?.getTime()
    ? formatDate(duration.startedAt)
    : formatDate(duration.startedAt) +
      " - " +
      (duration.isCompleted ? formatDate(duration.endedAt) : "Present");

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
  horizontal,
}) => (
  <Item horizontal={horizontal}>
    <ItemHeader
      style={{
        justifyContent: horizontal ? "start" : "space-between",
        marginRight: horizontal ? "10px" : "0px",
      }}
      horizontal={horizontal}
    >
      <ItemHeaderTitle horizontal={horizontal}>{title}</ItemHeaderTitle>
      <ItemHeaderInfo horizontal={horizontal}>
        {label && (
          <span
            style={{ color: "#323232", fontWeight: horizontal ? 500 : 400 }}
          >
            {label}
          </span>
        )}
        <span>{createHeaderInfoDuration(duration)}</span>
      </ItemHeaderInfo>
    </ItemHeader>
    <ItemBody>
      {description && <div style={{fontWeight: 500, marginBottom: '0.75rem'}}>{description}</div>}
      <NestedList items={details} />
    </ItemBody>
  </Item>
);

export default ResumeListItem;
