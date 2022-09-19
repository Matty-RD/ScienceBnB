import {createReviewThunk} from '../../store/reviews'
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import './ReviewFormPage.css';

function ReviewFormPage() {
  const dispatch = useDispatch();
  const history = useHistory();
  const user = useSelector(state => state.session.user)


  const[userId] = useState(user.id);
  const [review, setReview] = useState("");
  const [rating, setRating] = useState(1);

  let errorsObj = {review: ''};
  const [errors, setErrors] = useState(errorsObj);

  const updateReview = (e) => setReview(e.target.value);
  const updateRating = (e) => setRating(parseInt(e.target.value, 10));


  const handleSubmit = async (e) => {
    e.preventDefault();

    let error = false;
    errorsObj = {...errorsObj};
    if(review === '') {
      errorsObj.review = "Requires review";
      error = true;
    } else if (review.length < 5 || review.length > 20) {
      errorsObj.review = "Reviews must be longer than 5 characters and shorter than 20";
      error = true;
    }
    setErrors(errorsObj);

    if(!error) {
      const urlArray = window.location.href.split('/')
      const num = Number(urlArray[urlArray.length - 1])

    const createdReview = {
      userId,
      testId: num,
      review,
      rating
    };

      dispatch(createReviewThunk(createdReview));
      history.push("/tests");
    }
  }


  const handleCancelClick = (e) => {
    e.preventDefault();
    history.push("/tests");
  };


    return (
      <form className='review-form' onSubmit={handleSubmit}>
        <h1>Post a Review</h1>
        {errors.review && <div>{errors.review}</div>}
        <div className="reviewBox">
        <input type="text" placeholder="Review" value={review} onChange={updateReview}/>
        <div className="reviewBox">
        <label>
          Rating
          <select value={rating} onChange={updateRating}>
           <option value="1">1</option>
           <option value="2">2</option>
           <option value="3">3</option>
           <option value="4">4</option>
           <option value="5">5</option>
          </select>
        </label>
        </div>
        </div>
        <div className='buttons'>
        <button type="submit">Submit Review</button>
        <button type="button" onClick={handleCancelClick}>Cancel</button>
        </div>
      </form>
  );
}
  export default ReviewFormPage;
