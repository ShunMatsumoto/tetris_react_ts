import React from 'react';
import { StyledStartButton } from './styles/StyledStartButton';

type StartButtonProps = {
  callback: () => void;
};

const StartButton: React.FC<StartButtonProps> = ({ callback }) => (
  <StyledStartButton onClick={callback}>Start Game</StyledStartButton>
);

export default StartButton;
