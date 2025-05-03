import { useReducer } from "react";

const Counter =()=>{
    interface State{
        count: number 
    }

    type Action = 
    |{type: "increment"}
    |{type: "decrement"} 

    function reducer(state: State, action: Action) : State{
        switch(action.type){
            case "increment":
                return{count: state.count+1}
            case "decrement":
                return{count: state.count-1}
            default:
                return state 
        }
    }

    const [state, dispatch ] = useReducer(reducer, {count: 0})

    return(
        <>
        <div>
            <p>Count: {state.count}</p>
            <button onClick={()=> dispatch
                ({type: "decrement"})}>-</button>
            <button onClick={()=> dispatch
                ({type: "increment"})}>+</button>
        </div>
        </>
    )
}

export default Counter;
