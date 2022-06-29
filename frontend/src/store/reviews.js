import {csrfFetch} from './csrf';

const GET_ALL_REVIEWS = 'reviews/GET_ALL_REVIEWS';
const CREATE_REVIEW = 'reviews/CREATE_REVIEW';
const DELETE_REVIEW = 'tests/DELETE_REVIEW';

//Action Creator
const getReviews = (reviews) => ({
    type: GET_ALL_REVIEWS,
    reviews,
})

const createReviews = (createdReview) => ({
    type: CREATE_REVIEW,
    createdReview,
})

const deleteReview = (review) => ({
  type: DELETE_REVIEW,
  review,
})

//Thunks
export const getAllReviews = () => async(dispatch) => {
    const response = await csrfFetch('/api/reviews')
    const data = await response.json();
    dispatch(getReviews(data))
   }

export const createReviewThunk = (createdReview) => async(dispatch) => {
const response = await csrfFetch('/api/reviews/create', {
    method: "POST",
    headers: {
    "Content-Type": "application/json",
    },
    body: JSON.stringify(createdReview),
});
if (response.ok) {
    const createdReview = await response.json();
    dispatch(createReviews(createdReview));
    return createdReview;
}
};

export const deleteReviewId = (test, id) => async(dispatch) => {
    const response = await csrfFetch(`/api/reviews/${id}`, {
      method: 'DELETE',
   });
   if(response.ok) {
    const delReview = await response.json();
    dispatch(deleteReview(delReview));
    return delReview;
   }
  };

//reducer
const initialState = {};

   export const reviewReducer = (state = initialState, action) => {
    let newState = {...state};
    switch(action.type) {
        case GET_ALL_REVIEWS:
            action.reviews.forEach((review) => {
               return newState[review.id] = review;
            });
            return newState;
        case CREATE_REVIEW:
            if (!state[action.createdReview.id]) {
                newState = {
                    ...state,
                    [action.createdReview.id]: action.createdReview,
                };
            }
            return newState
        case DELETE_REVIEW:
            delete newState[action.review.id]
            return newState
        default:
            return state;
    }
}