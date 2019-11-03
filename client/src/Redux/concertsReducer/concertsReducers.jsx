import { TYPES } from "./concertsActions";


const initialState = {
  years: [],
  events: []
};

export default function(state = initialState, { type, payload }) {
  switch (type) {
    case TYPES.FETCH_PAST_DATES: {
      console.log(payload)
      return {
        ...state,
      years: [...new Set([...state.years, ...payload])].sort((a,b)=>b-a)
      };
    }
    case TYPES.FETCH_DATE: {
      return {
        ...state,
        events: payload.sort((a,b)=>new Date(b.date) - new Date(a.date))
      };
    }
    default:
      return state;
  }
}
