import { useState, useEffect } from 'react';
import { createStage, type Cell, type Stage, type Player } from '../gameHelpers';

export const useStage = (player: Player, resetPlayer: () => void) => {
  const [stage, setStage] = useState<Stage>(createStage());
  const [rowsCleared, setRowsCleared] = useState(0);

  useEffect(() => {
    setRowsCleared(0);

    const sweepRows = (newStage: Stage): Stage => {
      return newStage.reduce<Stage>((acc, row) => {
        if (row.findIndex(cell => cell[0] === 0) === -1) {
          setRowsCleared(prev => prev + 1);
          acc.unshift(new Array(newStage[0].length).fill([0, 'clear']) as Cell[]);
          return acc;
        }
        acc.push(row);
        return acc;
      }, []);
    };

    const updateStage = (prevStage: Stage): Stage => {
      // First flush the stage
      const newStage = prevStage.map(row =>
        row.map(cell => (cell[1] === 'clear' ? [0, 'clear'] as Cell : cell))
      );

      // Then draw the tetromino
      player.tetromino.forEach((row: (string | number)[], y: number) => {
        row.forEach((value: string | number, x: number) => {
          if (value !== 0) {
            newStage[y + player.pos.y][x + player.pos.x] = [
              value,
              `${player.collided ? 'merged' : 'clear'}`,
            ];
          }
        });
      });

      // Then check if we collided
      if (player.collided) {
        resetPlayer();
        return sweepRows(newStage);
      }

      return newStage;
    };

    setStage(prev => updateStage(prev));
  }, [player, resetPlayer]);

  return [stage, setStage, rowsCleared] as const;
};
