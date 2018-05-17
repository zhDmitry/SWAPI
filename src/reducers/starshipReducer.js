import { GET_STARSHIP } from '../actions/types';

const initialState = {
    items: []
}

export default function(state = initialState, action) {
    switch (action.type) {
        case GET_STARSHIP: {
            return {
                ...state,
                items: action.payload
            };
        }
        default:
            return state;
    }
}