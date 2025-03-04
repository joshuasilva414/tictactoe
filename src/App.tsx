import { useState, useEffect } from "react";
import "./App.css";
import Cell from "./Cell";

function App() {
  const [board, setBoard] = useState<string[]>(Array(9).fill(""));
  const [player, setPlayer] = useState<"X" | "O">("X");

  useEffect(() => {
    const winner = checkWinner();
    if (winner) {
      alert(`Player ${winner} wins!`);
      setBoard(Array(9).fill(""));
      setPlayer("X");
    }
  }, [board]);

  function handleClick(index: number) {
    if (board[index] !== "") {
      alert("Invalid move");
      return;
    }
    setBoard((prevBoard) => [
      ...prevBoard.slice(0, index),
      player,
      ...prevBoard.slice(index + 1),
    ]);

    setPlayer((prevPlayer) => (prevPlayer === "X" ? "O" : "X"));
  }

  function checkWinner() {
    const winningCombos = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (const combo of winningCombos) {
      const [a, b, c] = combo;
      if (board[a] && board[a] === board[b] && board[a] === board[c]) {
        return board[a];
      }
    }
    return null;
  }

  return (
    <div className="App">
      <h1 className="title">TicTacToe</h1>
      <div className="container">
        {board.map((value, index) => (
          <Cell key={index} value={value} onClick={() => handleClick(index)} />
        ))}
      </div>
    </div>
  );
}

export default App;
