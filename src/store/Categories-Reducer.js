let initialState = {
    categories:[
        {name:'food', display_name:'FOOD' , description:'Food is the language of the world'},
        {name:'electronics', display_name:'ELECTRONICS' , description:'keep up with developments'}
    ]
,
    activeCategory:{}
}

const categories = (state=initialState , action)=>{
    let {type , payload} = action
    switch(type){
        case 'ACTIVE':
            let activeCategory = initialState.categories.find(category=>category.name === payload);
            // console.log({categories:initialState.categories,active});
            return {categories:initialState.categories,activeCategory}
        default :
        return state
    }
}
export default categories;

//action:trigger the reducer to change the active category
export const active=(name)=>{
    return{
        type:'ACTIVE',
        payload:name,
    }
}