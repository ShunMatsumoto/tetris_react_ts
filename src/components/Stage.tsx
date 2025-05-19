import React from 'react';
import { StyledStage } from './styles/StyledStage';
import Cell from './Cell';
import { type Stage as StageType } from '../gameHelpers';
import type { TetrominoType } from '../tetrominos';

type StageProps = {
  stage: StageType;
};

const Stage: React.FC<StageProps> = ({ stage }) => (
  <StyledStage width={stage[0].length} height={stage.length}>
    {stage.map((row, y) => row.map((cell, x) => <Cell key={`${y}-${x}`} type={cell[0] as (0 | TetrominoType)} />))}
  </StyledStage>
);

export default Stage;
