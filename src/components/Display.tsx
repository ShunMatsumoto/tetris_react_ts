import React from 'react';
import { StyledDisplay } from './styles/StyledDisplay';

type DisplayProps = {
  gameOver?: boolean;
  text: string;
};

const Display: React.FC<DisplayProps> = ({ gameOver, text }) => (
  <StyledDisplay gameOver={gameOver}>{text}</StyledDisplay>
);

export default Display;
