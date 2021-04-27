import {buycake} from '../Redux/cake/cakeAction'
import React from 'react'
import {connect} from 'react-redux'
 
function CakeShop(props) {
    return(
        <div>
            <h2>number of cake-{props.numofCakes}sdfd</h2>
            <button onClick={props.buycake}>Buy_Cake</button>
        </div>
    )
}

const mapStateToProps= state =>{
    console.log(state.numofCakes);
    return{
        
        numOfCakes:state.numofCakes
    }
}

const mapDispatchToProps= dispatch =>{
    return{
        buycake: () =>dispatch(buycake())
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(CakeShop)