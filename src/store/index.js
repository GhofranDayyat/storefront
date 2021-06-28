import { createStore, combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import categories from './Categories-Reducer'
import products from './Products-Reducer'
import cart from './Cart-Reducer'
// combined more than one reducer in one reducer ...as obj
let reducer = combineReducers({categories, products,cart})
const store=()=>{
    return createStore(reducer,composeWithDevTools())
}
export default store();