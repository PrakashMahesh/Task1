import {BuyCake} from '../caketypes'

const initialState={
    numofCakes:10
}
const cakeReducer=(state=initialState,action) =>{
    switch(action.type){
        case BuyCake: return{
            ...state,
            numofCakes:state.numofCakes-1
        }
        default :return{
            state
        }

    }
}
export default cakeReducer