import styled from "styled-components";

const ListItem = styled.li`
  &:last-child {
    margin-bottom: 0;
    padding-bottom: 0;
  }

  margin: 0.25rem 0;
  padding: 0.125rem 0;
`;

/**
 * Nested List Item type interface
 * 
 * @property {T} value Stored data type
 * @property {NestedListItemType<T>[]} children Value's children data
 */
export interface NestedListItemType<T> {
  value: T;
  children?: NestedListItemType<T>[];
}

/**
 * Create Nested List with specific type item.
 * 
 * @param items 
 * @returns {React.FC}
 */
const createNestedItem = (items: NestedListItemType<string>[]) => (
  <ul>
    {items.map((item, index) => (
      <ListItem key={index}>
        {item.value}
        {item.children && createNestedItem(item.children)}
      </ListItem>
    ))}
  </ul>
);

type NestedListProps = {
  items: NestedListItemType<any>[];
};

const NestedList = ({ items }: NestedListProps) => createNestedItem(items);

export default NestedList;
