import _ from 'lodash';
import { FETCH_POSTS, FETCH_POST } from '../actions/index';

export default function(state={}, action){
  console.log('reducer:' + action);
  switch (action.type){
    case FETCH_POSTS:
    return _.mapKeys(action.payload.data, 'id');
    case FETCH_POST:
    // const post = action.payload.data;
    // const newstate = {...state};
    // newstate[post.id] = post;
    // return newstate;
    return {...state, [action.payload.data.id]: action.payload.data};
  }
  return state;
}