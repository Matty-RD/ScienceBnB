import {csrfFetch} from './csrf';

const GET_ALL_TESTS = 'tests/GET_ALL_TESTS';
const CREATE_TEST = 'tests/CREATE_TEST';

//Action Creator
const getTests = (tests) => ({
    type: GET_ALL_TESTS,
    tests,
})

const createTests = (createdTest) => ({
    type: CREATE_TEST,
    createdTest
})

//Thunks
export const getTestsThunk = () => async(dispatch) => {
 const response = await csrfFetch('/api/tests')
 const data = await response.json();
 dispatch(getTests(data))
}

export const createTestThunk = (createdTest) => async(dispatch) => {
  const response = await csrfFetch("/api/tests/create", {
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

const initialState = {};

export const testReducer = (state = initialState, action) => {
    let newState = {...state};
    switch(action.type) {
        case GET_ALL_TESTS:
            console.log(action.tests)
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
        default:
            return state;
    }
}
