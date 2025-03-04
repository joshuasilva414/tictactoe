import React, { useState } from "react";
import "./App.css";
import Cell from "./Cell";

function App() {
  const [player, setPlayer] = useState("X");
  const [board, setBoard] = useState(["", "", "", "", "", "", "", "", ""]);

  function handleClick(cellId: number) {
    if (board[cellId] !== "") {
      return;
    }
    setBoard((prevBoard) => {
      const newBoard = [...prevBoard];
      newBoard[cellId] = player;
      return newBoard;
    });
    const winner = checkWinner();
    if (winner) {
      alert(`Player ${winner} wins!`);
      setBoard(["", "", "", "", "", "", "", "", ""]);
      return;
    }
    setPlayer((prevPlayer) => (prevPlayer === "X" ? "O" : "X"));
  }

  function checkWinner(): string {
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
    return "";
  }

  return (
    <div className="App">
      <h1 className="title">TicTacToe</h1>
      <div className="container">
        {board.map((cell, index) => (
          <Cell key={index} value={cell} onClick={() => handleClick(index)} />
        ))}
      </div>
    </div>
  );
}

export default App;
