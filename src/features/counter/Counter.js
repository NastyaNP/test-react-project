import {useDispatch, useSelector} from "react-redux";
import {decrementCounter, incrementCounter} from "./counterSlice";

export const Counter = () => {
    const counter = useSelector( (state) => {
        return state.counter.count;
    });
    const dispatch = useDispatch();
    return (
        <div className="container">
            <button onClick={() => {
                dispatch(incrementCounter());
            }}>Увеличить</button>
            <button onClick={() => {
                dispatch(decrementCounter());
            }}>Уменьшить</button>
            <p> {counter} </p>
        </div>
    )
}
