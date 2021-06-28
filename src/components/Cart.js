import React from 'react' 
import {connect} from 'react-redux'
import {increment} from '../store/action'
import {Grid, Button ,Card} from '@material-ui/core'
function Category(props){
    console.log(props.count,'===========');
    // return(<h1>ggg</h1>)
    // console.log(props);
if (props.cartProd.show) {
    return(
        <>
       { props.cartProd.display.map((e,idx)=>{
           return(
            <Card key={idx}>
                {`${e} :${props.count.count||0}`}                  
            </Card>
           )
        })}
       </>
        )
}else{
    return(<>[]</>)
}
}
// 1- add the state to this component props
const mapStateToProps = state => ({
    cartProd: state.cart,
    count: state.products.products,
});
// 2- since I have some actions to use: 
// add the actions to the component props
const mapDispatch = {increment}
//3. connect your component and export it after its connected to redux store
export default connect(mapStateToProps,mapDispatch)(Category)// export default Category;