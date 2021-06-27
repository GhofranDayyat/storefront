import {active , increment} from '../store/Products-Reducer'
import { connect } from 'react-redux'
import React from 'react'
// {props.product.productSelected.map(e=>{
//     if(props.active!==e.category)
//     return(
//       <>
//         <h3>{e.name}</h3>
//       </>
//     )
// })}

function Product (props){
    console.log(props.product,'from product');
    console.log(props.product.productSelected);
    // return(<><h2>gg</h2></>)
    if(props.test){
    return(
        <> 
    {console.log(props.test,';8/8/8')}
    {props.test.map(e=>{
  
    return(
      <>
        <h3>{e.name}</h3>
      </>
    )
})}
             
        
        </>
    )}else{
        return(
            <>
        <h1>Choose Category</h1>
        </>
        )
    }
}


// 1- add the state to this component props
const mapStateToProps=state=>({
    product:state.products, /// state.reducer name in combineReducer
    // active:state.categories.active
    test:state.products.productSelected
})


// 2- since I have some actions to use: 
// add the actions to the component props
const mapDispatch={active , increment}

//3. connect your component and export it after its connected to redux store
export default connect(mapStateToProps , mapDispatch)(Product)// export default Product;

