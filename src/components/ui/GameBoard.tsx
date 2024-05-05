import React, { useMemo } from "react";
import GameTitle from "./GameTitle";
import pickaxeAndShover from "../../images/ui/pickaxe_and_shovel1.png";
import board from "../../images/ui/down_board.png";
import { ResizeUIProps } from "../../types/menu";

function GameBoard({ windowDimensions }: ResizeUIProps) {
  const ratio = useMemo(() => 1847 / 551, []);
  const widthPixels = useMemo(
    () => (1847 * windowDimensions.width) / 3840,
    [windowDimensions]
  );

  return (
    <div
      style={{
        display: "flex",
        position: "relative",
        backgroundImage: `url(${board})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "contain",
        top: "1vh",
        left: "5vw",
        width: `${widthPixels}px`,
        height: `${widthPixels / ratio}px`,
        justifyContent: "space-between",
        padding: "3vh 2vw 0",
      }}
    >
      <div className="board-pickaxe">
        <img src={pickaxeAndShover} alt="Pickaxe and shovel" />
      </div>
      <div>
        <GameTitle windowDimensions={windowDimensions} />
      </div>
      <div className="board-pickaxe board-pickaxe-right">
        <img src={pickaxeAndShover} alt="Pickaxe and shovel" />
      </div>
    </div>
  );
}

export default GameBoard;
