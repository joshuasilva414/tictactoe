import React from "react";

type Props = {
  value?: string;
  onClick?: () => void;
};

function Cell({ value, onClick }: Props) {
  return (
    <div className="cell" onClick={onClick}>
      {value}
    </div>
  );
}

export default Cell;
