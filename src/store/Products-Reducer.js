let initialState = []
const products =(state=initialState, action)=>{
    let {type , payload } = action;
    switch(type){
        
        case 'GET':
            console.log(payload,'&&&&&&&&&&&&&&&&&');
            // initialState=payload
            // return {initialState: payload}
            initialState = payload;
            return payload
        case 'ACTIVE':
            let productSelected= initialState.filter((item)=>item.category===payload?item.category:null)
                return {initialState :productSelected}

        case 'INCREMENT': 
        console.log(payload.name);
            const selectedItem = initialState.map(e=>{
                return e.name===payload.name?e.inventory = e.inventory-1 :e

            })

            
            console.log(selectedItem);
            return { 
                initialState:selectedItem,
                
            };
        default:
            return state;
    }
}
export default products