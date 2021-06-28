//action:trigger the reducer to change the active category
export const active=(name)=>{
    return{
        type:'ACTIVE',
        payload:name,
    }
}
export const increment =(el)=>{
    return{
        type:'INCREMENT',
        payload:el
    }
}
export const decrement =(name)=>{
    return{
        type:'DECREMENT',
        payload: name
    }
}