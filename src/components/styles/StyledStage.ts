import styled from 'styled-components';

type StyledStageProps = {
  width: number;
  height: number;
};

export const StyledStage = styled.div<StyledStageProps>`
  display: grid;
  grid-template-rows: repeat(
    ${props => props.height},
    calc(25vw / ${props => props.width})
  );
  grid-template-columns: repeat(${props => props.width}, 1fr);
  grid-gap: 1px;
  border: 2px solid #333;
  width: 100%;
  max-width: 25vw;
  background: #111;
`;
