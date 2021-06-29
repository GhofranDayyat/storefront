let initialState = {
    products:[
        {name:'KEYBOARD' , 
        price: '178.6$', 
        image: 'https://source.unsplash.com/random?Keyboard', 
        inStock:200 ,
        category:'electronics'
        },
        {name:'Tv' , 
        price: '750$', 
        image: 'https://images.samsung.com/is/image/samsung/levant-uhd-tu8500-ua55tu8500uxtw-frontblack-229855928?$684_547_PNG$', 
        inStock:300 ,
        category:'electronics'
        },
        {name:'USB' , 
        price: '13.5$', 
        image: 'https://cdn.shopify.com/s/files/1/0066/3801/0432/products/uni-usb-c-usb-c-8-in-1-hub-15384714739775_2_2048x2048.jpg?v=1624011415', 
        inStock:260 ,
        category:'electronics'
        },
        {name:'Calzones' , 
        price: '20.3$', 
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvCV1nEn29DnjI4Yvdm1hca_eRNuW_OQmoXA&usqp=CAU', 
        inStock:500 ,
        category:'food'
        },
        {name:'Mouse' , 
        price: '30.3$',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/22/3-Tasten-Maus_Microsoft.jpg/220px-3-Tasten-Maus_Microsoft.jpg',  
        inStock:163 ,
        category:'electronics'
        },
        {name:'Apple' , 
        price: '6.2$', 
        image: 'https://ezsai.com/wp-content/uploads/2021/02/firefox_2018-07-10_07-50-11.png', 
        inStock:300 ,
        category:'food'
        }
    ],
    count:0

}
const products =(state=initialState, action)=>{
    let {type , payload } = action;
    switch(type){
        case 'ACTIVE':
            let productSelected= initialState.products.filter((item)=>item.category===payload?item.category:null)
            // console.log({count : state.count , productSelected},'**************');
                return {productSelected,count : state.count}

        case 'INCREMENT': 
            const selectedItem = state.productSelected.find(e=>e.name===payload.name)
            selectedItem.inStock = selectedItem.inStock-1
            
            // selectedItem.count = selectedItem.count+1
            console.log(state,'**************');
            // console.log(selectedItem);
            return { 
                products:selectedItem,
                count:state.count
            };
        default:
            return state;
    }
}
export default products