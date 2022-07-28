import { REVERSE_WORD } from '../actions/index.js'

const initialState = {
    allWords: []
}


export default function rootReducer( state = initialState, action ){
    switch(action.type){
        case REVERSE_WORD: {
            return {
                ...state,
                allWords: [ ...state.allWords, action.payload ]
            }
        }
        default:
            return state
    }
}