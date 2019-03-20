export default (state = [], action ) => {
  switch (action.type) {
    
  // case "EditchangeHn":
  // return {
  //       ...state,
  //       hn: action.newHn ,
  //       fname : action.newfname,
  
  //     }
      
        case "updateValue":
        return{
          ...state,
          [action.name] : action.value     
          
        }
        
  default:
    return state
  }
}

