import superagent from 'superagent'
// const api='https://api-server-0.herokuapp.com/products';
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

export const getRemotData=(api)=>(dispatch , state)=>{
// 1 // get remot  data with superagent 
// 2 // then dispatch an action with the response after we get it 
// console.log(dispatch , 'dispatch');
// console.log(state , 'state');


return superagent.get(api).then(res=>{

    // console.log(dispatch(getAction(res.body)));
    dispatch(getAction(res.body))
    // getAction(res.body)
    // dispatch(active(res.body));
}).catch((e)=>{console.log('error' , e.message)})
}

export const getAction = payload=>{

    return{
        type:'GET',
        payload: payload
    }
}

export const updateRemotData=(api, product)=>{
  return (dispatch)=>{
console.log(dispatch);
      return superagent.put(`${api}/${product._id}`).send({inventory:product.inventory-1}).then(()=>{
          dispatch(increment(product))
        }).catch((e)=>{console.log('error' , e.message)})
  }
}