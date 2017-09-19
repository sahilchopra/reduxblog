import axios from 'axios';
const ROOT_URL = 'http://reduxblog.herokuapp.com/api';
const KEY = '?key=PAPERCLIP1234'

export const FETCH_POSTS = 'fetch_posts';

export function postsFetch(){
  const url = `${ROOT_URL}/posts${KEY}`;
  const request = axios.get(url);
  return{
    type: FETCH_POSTS,
    payload: request
  }
}