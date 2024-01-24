// HexagonComponent.jsx
import React from "react";
import { HexagonContainer, Hexagon } from "../hexagon-component/Hexagon.styles";

const r = 120;


function createBoard() {
  console.log("Creating board...");
  const rosLengthList = [3, 4, 5, 4, 3];

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
        currentSide: changeSide(state.currentSide),
      };
    default:
      return state;
  }
}

const HexagonComponent = () => {
  const [state, dispatch] = React.useReducer(reducer, {
    board: createBoard(),
    currentSide: "A",
  });

  console.log("Rendering HexagonComponent");

  return (
    <HexagonContainer className="App" style={{ marginTop: "35px" }}>
      <div style={{ marginLeft: "20px", marginRight: "20px" }}>
        {state.board.map((row, rowIndex) => (
          <div
            style={{
              display: "flex",
              justifyContent: "center",
            }}
            key={rowIndex}
          >
            {row.map((side, cellIndex) => (
              <Hexagon
                side={side}
                style={{ height: `${r}px`, width: `${r}px`, margin: "5px" }}
                onClick={() =>
                  dispatch({
                    type: "put",
                    payload: { rowIndex, cellIndex },
                  })
                }
                key={cellIndex}
              />
            ))}
          </div>
        ))}
      </div>
    </HexagonContainer>
  );
};

export default HexagonComponent;
