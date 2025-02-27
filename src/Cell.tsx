import React from "react";

type Props = {
  value?: string;
  cellId: number;
};

function Cell({ cellId }: Props) {
  return <div className="cell">{cellId}</div>;
}

export default Cell;
