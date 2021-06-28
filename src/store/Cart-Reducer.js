let initialState={
    list:[],
    display:[],
    show:false
}
const cart = (state = initialState , action)=>{
let {type , payload} = action ;
// let count =0
switch(type){
    case 'INCREMENT':
        if(!state.display.includes(payload.name)){
            state.display.push(payload.name)
            // state.count=1
        }
        // console.log(state);
    return { 
        list:[...state.list,payload],
        display:state.display,
        show:true
    };
    default:
    return state;
}
}
export default cart;