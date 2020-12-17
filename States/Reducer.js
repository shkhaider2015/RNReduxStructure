import { combineReducers } from "redux";
import { 
    FETCH_PRODUCTS_BEGIN,
    FETCH_PRODUCTS_SUCCESS,
    FETCH_PRODUCTS_FAILURE
 } from "../Actions/product";


const initState = {
    value : 0,
    anotherValue : 1,
    items : [],
    loading : false,
    error : null
};

const CounterReducer = (state=initState, action) =>
{
    console.log("Reach", action.type)
    switch(action.type)
    {
        case "INCREMENT":
            return{
                ...state,
                value : state.value + 1
            }
        case "DECREMENT":
                return{
                    ...state,
                    value : state.value - 1
                }
        default:
            return state
    }
}
const FiveMultipleReducer = (state=initState, action) =>
{
    console.log("Reach Multiple", action.type)
    switch(action.type)
    {
        case "MULTIPLY":
            return{
                ...state,
                anotherValue : state.anotherValue * 5
            }
        case "DEVIDE":
                return{
                    ...state,
                    anotherValue : state.anotherValue / 5
                }
        default:
            return state
    }
}

const ProductReducer = (state = initState, action) =>
{
    switch(action.type)
    {
        case FETCH_PRODUCTS_BEGIN:
            return{
                ...state,
                loading : true,
                error : null
            };
        case FETCH_PRODUCTS_SUCCESS:
            return{
                ...state,
                loading : false,
                items : action.payload.products
            };
        case FETCH_PRODUCTS_FAILURE:
            return{
                ...state,
                loading : false,
                error : action.payload.error,
                items : [],
            };
        default:
            return state
    }
}

const Reducers = combineReducers({
    counter : CounterReducer,
    multiple : FiveMultipleReducer,
    products : ProductReducer,
});

export {Reducers}