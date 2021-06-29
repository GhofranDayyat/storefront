let initialState={
    list:[],
    display:[],
    show:false,
    count:0
}
const cart = (state = initialState , action)=>{
let {type , payload} = action ;
let count=state.count
switch(type){
    case 'INCREMENT':
        if(!state.display.includes(payload.item)){
            console.log(payload.item);
            state.display.push(payload.name)
            count = state.count+1
            // state.count=1
        }
        // console.log(state);

    return { 
        list:[...state.list,payload],
        display:state.display,
        show:true,
        count
    };
    default:
    return state;
}
}
export default cart;