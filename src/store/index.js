import { createStore, combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import categories from './Categories-Reducer'
import products from './Products-Reducer'



// combined more than one reducer in one reducer ...as obj
let reducer = combineReducers({categories, products})




const store=()=>{
    return createStore(reducer,composeWithDevTools())
}

export default store();