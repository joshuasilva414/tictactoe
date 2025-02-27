import "./App.css";
import Cell from "./Cell";

function App() {
  return (
    <div className="App">
      <h1 className="title">TicTacToe</h1>
      <div className="container">
        <div className="row">
          <Cell cellId={0}></Cell>
          <Cell cellId={1}></Cell>
          <Cell cellId={2}></Cell>
        </div>
        <div className="row">
          <Cell cellId={3}></Cell>
          <Cell cellId={4}></Cell>
          <Cell cellId={5}></Cell>
        </div>
        <div className="row">
          <Cell cellId={6}></Cell>
          <Cell cellId={7}></Cell>
          <Cell cellId={8}></Cell>
        </div>
      </div>
    </div>
  );
}

export default App;
