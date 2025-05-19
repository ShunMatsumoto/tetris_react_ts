import React from 'react';
import { StyledCell } from './styles/StyledCell';
import { TETROMINOS } from '../tetrominos';
import type { TetrominoType } from '../tetrominos';

type Props = {
  type: TetrominoType | 0;
};

const Cell: React.FC<Props> = ({ type }) => (
  <StyledCell type={type} color={TETROMINOS[type].color} />
);

// React.memo makes sure we only re-render the changed cells
export default React.memo(Cell);
