import { combineReducers } from 'redux';
import signIn from './messageReducer';
import { reducer as formReducer } from 'redux-form';


const rootreducer = combineReducers({
    signIn,
    form:formReducer
})

export default rootreducer;