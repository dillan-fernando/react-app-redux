import React from "react";
import {
  addCounter1,
  addCounter2,
  minusCounter1,
  minusCounter2,
} from "../store";
import { useDispatch, useSelector } from "react-redux";

type CounterState = {
  counter1: number,
  counter2: number
}

export interface IProfileProps {}
const Profile: React.FunctionComponent<IProfileProps> = (props) => {
  const dispatch = useDispatch();
  const counter1 = useSelector((state: CounterState) => {
    return state.counter1;
  });
  const counter2 = useSelector((state: CounterState) => {
    return state.counter2;
  });
  return (
    <div>
      <div>
        <h1>Counter 1 : {counter1}</h1>
        <button onClick={() => dispatch(addCounter1())}>Add</button>
        <button onClick={() => dispatch(minusCounter1())}>Minus</button>
      </div>
      <div>
        <h1>Counter 2 : {counter2}</h1>
        <button
          onClick={() => dispatch(addCounter2(Math.trunc(Math.random() * 10)))}
        >
          Add
        </button>
        <button
          onClick={() =>
            dispatch(minusCounter2(Math.trunc(Math.random() * 10)))
          }
        >
          Minus
        </button>
      </div>
    </div>
  );
};

export default Profile;
