import axios from 'axios';
const ROOT_URL = 'http://reduxblog.herokuapp.com/api';
const KEY = '?key=PAPERCLIP1234'

export const FETCH_POSTS = 'fetch_posts';
export const CREATE_POST = 'create_post';
export const FETCH_POST = 'fetch_post';
export const DELETE_POST = 'delete_post';

export function postsFetch(){
  const url = `${ROOT_URL}/posts${KEY}`;
  const request = axios.get(url);
  return{
    type: FETCH_POSTS,
    payload: request
  }
}

export function createPost(data, callback){
  const url = `${ROOT_URL}/posts${KEY}`;
  const request = axios.post(url, data)
                       .then(() => callback());
  return {
    type: CREATE_POST,
    payload: request
  }
}

export function postList(id){
  const url = `${ROOT_URL}/posts/${id}${KEY}`;
  const request = axios.get(url);
  return{
    type: FETCH_POST,
    payload: request
  }
}

export function deletePost(id, callback){
  const url = `${ROOT_URL}/posts/${id}${KEY}`;
  const request = axios.delete(url)
                       .then(() => callback());
  return{
    type: DELETE_POST,
    payload: id
  }
}