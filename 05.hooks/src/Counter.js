import React, { useReducer } from "react";

function reducer(state, action) {
  switch (action.type) {
    case "INCREMENT":
      return { value: state.value + 1 };
      break;
    case "DECREMENT":
      return { value: state.value - 1 };
      break;
    default:
      return state;
      break;
  }
}

const Counter = () => {
  const [state, dispatch] = useReducer(reducer, { value: 0 }); //여기 value는 reducer의 state 초기값.

  return (
    <div>
      <p>
        현재 카운터 값은 <b>{state.value}</b> 입니다
      </p>
      <button onClick={() => dispatch({ type: "INCREMENT" })}>+1</button>
      <button onClick={() => dispatch({ type: "DECREMENT" })}>-1</button>
    </div>
  );
};

export default Counter;
