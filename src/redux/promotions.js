
import * as ActionTypes from "./ActionTypes"
export const Promotions = (state={isLoading:true,promotions:[],errmess:null}, action) => {
  switch (action.type) {
    case ActionTypes.PROMOS_LOADING:
       return { ...state, isLoading: true, promotions: [], errmess: null };
    case ActionTypes.ADD_PROMOS:
       return {...state,isLoading:false,promotions:action.payload,errmess:null};
    case ActionTypes.PROMOS_FAILED:
       return {...state,isLoading:false,errmess:action.payload};
    default:
      return state;
  }
};
