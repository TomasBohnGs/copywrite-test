import axios from 'axios';

export const REVERSE_WORD = 'REVERSE_WORD';

export function reverseWord(query){
    return function (dispatch){
        axios.get(`/iecho?text=${query}`)
        .then(data => {
            return dispatch({
                type: REVERSE_WORD,
                payload: data.data
            })
        })
        .catch(err => console.log(err))
    }
}