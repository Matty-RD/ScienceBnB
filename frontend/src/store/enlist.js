import {csrfFetch} from './csrf';

const GET_ALL_ENLISTS = 'enlists/GET_ALL_ENLISTS';
const CREATE_ENLIST = 'enlists/CREATE_ENLIST';
const DELETE_ENLIST = 'enlists/DELETE_ENLIST';


//Action Creator
const getEnlists = (enlists) => ({
    type: GET_ALL_ENLISTS,
    enlists,
})

const createEnlists = (createdEnlist) => ({
    type: CREATE_ENLIST,
    createdEnlist,
})

const deleteEnlist = (enlist) => ({
    type: DELETE_ENLIST,
    enlist,
  })

//Thunks
export const getAllEnlists = (id) => async(dispatch) => {
    const response = await csrfFetch(`/api/enlist/${id}`)
    const data = await response.json();
    dispatch(getEnlists(data))
   }


export const createEnlistThunk = (createdEnlist, id) => async(dispatch) => {
const response = await csrfFetch(`/api/enlist/create/${id}`, {
    method: "POST",
    headers: {
    "Content-Type": "application/json",
    },
    body: JSON.stringify(createdEnlist),
});
if (response.ok) {
    const createdEnlist = await response.json();
    dispatch(createEnlists(createdEnlist));
    return createdEnlist;
}
};

export const deleteEnlistThunk = (id) => async(dispatch) => {
    const response = await csrfFetch(`/api/enlist/delete/${id}`, {
      method: 'DELETE',
   });
   if(response.ok) {
    const delEnlist = await response.json();
    dispatch(deleteEnlist(delEnlist));
    return delEnlist;
   }
  };


//reducer
const initialState = {};

   export const enlistReducer = (state = initialState, action) => {
    let newState = {...state};
    switch(action.type) {
        case GET_ALL_ENLISTS:
            const neoState = {}
            action.enlists.forEach((enlist) => {
               return neoState[enlist.id] = enlist;
            });
            return neoState;
        case CREATE_ENLIST:
            if (!state[action.createdEnlist.id]) {
                newState = {
                    ...state,
                    [action.createdEnlist.id]: action.createdEnlist,
                };
            }
            return newState
        case DELETE_ENLIST:
            delete newState[action.enlist.id]
            return newState
        default:
            return state;
    }
}
