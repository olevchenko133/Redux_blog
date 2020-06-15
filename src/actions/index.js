import jsonPlaceholder from '../api/jsonPlaceholder'
import _ from 'lodash'
// export const fetchPosts = async () => {
//     // Bad approach!!! Because we break rules of action creators.
//     // Actions should be PLAIN objects
//     // We need to use middleware for async actions!!!
//     const response = await jsonPlaceholder.get('/posts')
//     return {
//         type: "FETCH_POSTS",
//         payload: response
//     };
// };


// WITH THUNK

// export const fetchPosts = () => {
//     return async function (dispatch, getState) {
//         const response = await jsonPlaceholder.get('/posts')
//         dispatch({
//             type: "FETCH_POSTS",
//             payload: response
//         })
//     };
// };

// REFACTOR SYNTAX
export const fetchPosts = () => async dispatch => {
    const response = await jsonPlaceholder.get('/posts')
    dispatch({
        type: "FETCH_POSTS",
        payload: response.data
    })
}


// export const fetchUser = function (id) {
//   return  async function (dispatch) {
//         const response = await jsonPlaceholder.get(`/users/${id}`);
//         dispatch({ type: "FETCH_USER", payload: response.data })
//     };
// }
export const fetchUser = (id) => dispatch => {
    _fetchUser(id, dispatch);
};
export const _fetchUser = _.memoize(async (id, dispatch) => {
    const response = await jsonPlaceholder.get(`/users/${id}`);
    dispatch({ type: "FETCH_USER", payload: response.data })
})
    ;