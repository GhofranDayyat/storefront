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
            console.log(payload);
            // let activeCategory = initialState.categories.find(category=>category.name === payload);
            // console.log( initialState.categories ,payload,'==============99999999999');
            return { categories: initialState.categories ,payload}
        default :
        return state
    }
}
export default categories;