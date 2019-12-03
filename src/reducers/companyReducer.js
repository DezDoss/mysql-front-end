const studentReducer = (state = [],action) => {

    switch(action.type){
    
    case 'ADD_STUDENT':
    let stateCopy = [...state,action.payload];
    localStorage.setItem('students',JSON.stringify(stateCopy));
    return stateCopy
    
    case 'DELETE_STUDENT':
    stateCopy = state.filter( x => x.id !== action.payload);
    localStorage.setItem('students',JSON.stringify(stateCopy));
    return stateCopy
        
    
    default:
        return state;
    }
    
    }
    export default studentReducer;