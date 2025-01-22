import { useReducer } from "react";

function reducer(state, action) {
  switch (action.type) {
    case "INCREASE":
      return state + action.data;
    case "DECREASE":
      return state - action.data;
    default:
      return state;
  }
}

export default function Exam() {
  const [state, dispatch] = useReducer(reducer, 0);

  const onClickPlus = (state, action) => {
    dispatch({
      type: "INCREASE",
      data: 1,
    });
  };
  const onClickMinus = (state, action) => {
    dispatch({
      type: "DECREASE",
      data: 1,
    });
  };
  return (
    <div>
      <h1>{state}</h1>
      <button onClick={onClickPlus}>+</button>
      <button onClick={onClickMinus}>-</button>
    </div>
  );
}
