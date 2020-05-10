
import { COMMENTS} from "../shared/comments";
import * as ActionTypes from './ActionTypes'
export const Comments = (
         state = {  comments: [], errmess: null },
         action
       ) => {
         switch (action.type) {
           case ActionTypes.ADD_COMMENT:
             var comment = action.payload;
             comment.id = state.comments.length;
             comment.date = new Date().toISOString();
             return {...state,comments:state.comments.concat(comment)};
           case ActionTypes.ADD_COMMENTS:  
                return{...state,comments:action.payload,errmess:null};
           case ActionTypes.COMMENTS_FAILED:
                return { ...state, errmess: action.payload };
           default:
             return state;
         }
       };