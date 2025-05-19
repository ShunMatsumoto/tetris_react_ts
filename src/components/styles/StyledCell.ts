import styled from 'styled-components';

type StyledCellProps = {
  type: any;
  color: string;
};

export const StyledCell = styled.div<StyledCellProps>`
  width: auto;
  background: rgba(${props => (props.color ? props.color : '0, 0, 0')}, 0.8);
  border: ${props => (props.type === 0 ? '0px solid' : '4px solid')};
  border-bottom-color: rgba(${props => props.color}, 0.1);
  border-right-color: rgba(${props => props.color}, 1);
  border-top-color: rgba(${props => props.color}, 1);
  border-left-color: rgba(${props => props.color}, 0.3);
`;
