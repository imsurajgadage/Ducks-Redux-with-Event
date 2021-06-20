import {combineReducers,createStore} from 'redux';
import counterReducer from './ducks/counter';
import timeReducer from './ducks/time'

export  const reducer = combineReducers({
    counter: counterReducer,
    time:timeReducer
})
const store = createStore(reducer);

export default store
