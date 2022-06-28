import {csrfFetch} from './csrf';

const GET_ALL_TESTS = 'tests/GET_ALL_TESTS';
const GET_A_TEST = 'tests/GET_A_TEST';
const CREATE_TEST = 'tests/CREATE_TEST';
const UPDATE_TEST = 'tests/UPDATE_TEST';
const DELETE_TEST = 'tests/DELETE_TEST';

//Action Creator
const getTests = (tests) => ({
    type: GET_ALL_TESTS,
    tests,
})

const getATest = (test) => ({
  type: GET_A_TEST,
  test,
})

const createTests = (createdTest) => ({
    type: CREATE_TEST,
    createdTest,
})

const updateTest = (test) => ({
    type: UPDATE_TEST,
    test,
})

const deleteTest = (test) => ({
  type: DELETE_TEST,
  test,
})

//Thunks
export const getTestsThunk = () => async(dispatch) => {
 const response = await csrfFetch('/api/tests')
 const data = await response.json();
 dispatch(getTests(data))
}

export const getTest = (id) => async(dispatch) => {
  const response = await csrfFetch(`/api/tests/${id}`)
  const data = await response.json();
  dispatch(getATest(data))
 }

export const createTestThunk = (createdTest) => async(dispatch) => {
  const response = await csrfFetch('/api/tests/create', {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(createdTest),
  });
  if (response.ok) {
    const createdTest = await response.json();
    dispatch(createTests(createdTest));
    return createdTest;
  }
};

export const deleteTestId = (test, id) => async(dispatch) => {
  const response = await csrfFetch(`/api/tests/${id}`, {
    method: 'DELETE',
 });
 if(response.ok) {
  const delTest = await response.json();
  dispatch(deleteTest(delTest));
  return delTest;
 }
};

export const updateTestThunk = (test, id) => async(dispatch) => {
    const response = await csrfFetch(`/api/tests/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(test),
      });
      if (response.ok) {
        const test = await response.json();
        dispatch(updateTest(test));
        return test;
      }
    }

//Reducer
const initialState = {};

export const testReducer = (state = initialState, action) => {
    let newState = {...state};
    switch(action.type) {
        case GET_ALL_TESTS:
            action.tests.forEach((test) => {
               return newState[test.id] = test;
            });
            return newState;
        case CREATE_TEST:
            if (!state[action.createdTest.id]) {
                newState = {
                  ...state,
                  [action.createdTest.id]: action.createdTest,
                };
            }
            return newState
        case UPDATE_TEST:
                newState = {...state, [action.test.id]: action.test,};
            return newState
        case DELETE_TEST:
            delete newState[action.test.id]
            return newState
        default:
            return state;
    }
}
