import { csrfFetch } from './csrf';

const GET_ALL_TESTS = 'tests/GET_ALL_TESTS';
const CREATE_TEST = 'tests/CREATE_TEST';

//Action Creator
const getTests = (tests) => ({
    type: GET_ALL_TESTS,
    tests
})

const createTests = (createdTest) => ({
    type: GET_ALL_TESTS,
    test
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
  }
};

const initialState = {};

export const testReducer = (state = initialState, action) => {
    let newState = {...state};
    switch(action.type) {
        case GET_ALL_TESTS:
            action.tests.forEach((test) => {
                newState[test.id] = test;
            });
            return newState;
        case CREATE_TEST:
            newState = Object.assign({}, state);
            newState.test = action.payload;
            return newState;
        default:
            return state;
    }
}
