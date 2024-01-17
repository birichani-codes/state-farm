import React from "react";
import "./styles.css";

//const sin60 = 2 / Math.sqrt(3);
const r = 120; // Increase the size of the hexagon

const Hex = (props) => {
  const { side = "", ...divProps } = props;

  return (
    <div
      {...divProps}
      className={`hex ${side}`}
      style={{
        boxSizing: "border-box",
        height: `${r}px`, // Adjust the height based on the increased size
        width: `${r}px`, // Adjust the width based on the increased size
        ...props.style,
        position: "relative",
        borderRadius: "100%"
      }}
    >
      <div
        style={{
          borderTop: "1px solid #000",
          borderBottom: "1px solid #000",
          boxSizing: "border-box",
          width: `${r / Math.sqrt(3)}px`, // Adjust the width based on the increased size
          height: "100%",
          margin: "0 auto",
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          transform: "rotate(90deg)"
        }}
      />
      <div
        style={{
          borderTop: "1px solid #000",
          borderBottom: "1px solid #000",
          boxSizing: "border-box",
          width: `${r / Math.sqrt(3)}px`, // Adjust the width based on the increased size
          height: "100%",
          margin: "0 auto",
          transform: "rotate(150deg)",
          transformOrigin: "center center",
          position: "absolute",
          top: 0,
          left: 0,
          right: 0
        }}
      />
      <div
        style={{
          borderTop: "1px solid #000",
          borderBottom: "1px solid #000",
          boxSizing: "border-box",
          width: `${r / Math.sqrt(3)}px`, // Adjust the width based on the increased size
          height: "100%",
          margin: "0 auto",
          transform: "rotate(210deg)",
          transformOrigin: "center center",
          position: "absolute",
          top: 0,
          left: 0,
          right: 0
        }}
      />
    </div>
  );
};

function createBoard() {
  const rosLengthList = [5, 6, 7, 8, 9, 8, 7, 6, 5];

  return rosLengthList.map((length) => new Array(length).fill(0));
}

function put(board, rowIndex, cellIndex, side) {
  const newBoard = board.map((row) => [...row]);
  newBoard[rowIndex][cellIndex] = side;
  return newBoard;
}

function changeSide(side) {
  return side === "A" ? "B" : "A";
}

function reducer(state, action) {
  switch (action.type) {
    case "put":
      return {
        ...state,
        board: put(
          state.board,
          action.payload.rowIndex,
          action.payload.cellIndex,
          state.currentSide
        ),
        currentSide: changeSide(state.currentSide)
      };
    default:
      return state;
  }
}

const App = () => {
  const [state, dispatch] = React.useReducer(reducer, {
    board: createBoard(),
    currentSide: "A"
  });

  return (
    <div className="App" style={{ marginTop: "35px" }}>
      {/* Margin from navigation */}
      <div style={{ marginLeft: "20px", marginRight: "20px" }}>
        {state.board.map((row, rowIndex) => (
          <div
            style={{
              marginTop: "-14px",
              display: "flex",
              justifyContent: "center"
            }}
            key={rowIndex}
          >
            {row.map((side, cellIndex) => (
              <Hex
                side={side}
                style={{ height: `${r}px`, width: `${r}px` }}
                onClick={() =>
                  dispatch({
                    type: "put",
                    payload: { rowIndex, cellIndex }
                  })
                }
                key={cellIndex}
              />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
