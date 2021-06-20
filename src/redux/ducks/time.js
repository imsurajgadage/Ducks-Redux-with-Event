const TIME = 'time';

export const time = () =>({
    type: TIME
})

const initialState = {
    currentTime: []
}


export default (state = initialState, action) =>{
    switch(action.type){
        case  TIME:
            // return {...state,currentTime: state.timeForUpdate}
            return {
                ...state,
                currentTime: [
                  ...state.currentTime,
                  {            
                    value: new Date().toLocaleTimeString(),
                  }
                ]
              }

            default: 
                return state;
    }
}