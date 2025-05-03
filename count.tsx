import { useReducer } from "react";
import "./App.css";

const Counter = () => {
    interface State {
        count: number;
    }

    type Action =
        | { type: "increment"; payload: number }
        | { type: "decrement"; payload: number }
        | { type: "reset" };

    function reducer(state: State, action: Action): State {
        switch (action.type) {
            case "increment":
                return { count: state.count + action.payload };
            case "decrement":
                return { count: state.count - action.payload };
            case "reset":
                return { count: 0 };
            default:
                return state;
        }
    }

    const [state, dispatch] = useReducer(reducer, { count: 0 });

    return (
        <div className="body">
        <div className="counter-container">
            <p className="counter-display">Count: {state.count}</p>
            <div className="counter-buttons">
                <button 
                    className="counter-btn decrement-btn"
                    onClick={() => dispatch({ type: "decrement", payload: 1 })}
                >
                    -
                </button>
                <button 
                    className="counter-btn reset-btn"
                    onClick={() => dispatch({ type: "reset" })}
                >
                    Reset
                </button>
                <button 
                    className="counter-btn increment-btn"
                    onClick={() => dispatch({ type: "increment", payload: 1 })}
                >
                    +
                </button>
            </div>
        </div>
        </div>
    );
};

export default Counter;