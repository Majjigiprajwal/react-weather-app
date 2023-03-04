import { SET_TEMPERATURE_PREFERENCE } from "./action";
import { initialState } from "./index";



export  const reducer =(state=initialState,action)=>{
console.log(initialState);
switch (action.type) {
    
    case SET_TEMPERATURE_PREFERENCE:{
       console.log(action.payload)
        return{
            ...state,
            temperature:action.payload
        }
    }

    default:
        return state
}

}