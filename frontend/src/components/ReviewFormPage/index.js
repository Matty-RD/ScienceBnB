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
  const [rating, setRating] = useState(0);

  const updateReview = (e) => setReview(e.target.value);
  const updateRating = (e) => setRating(e.target.value);


  const handleSubmit = async (e) => {
    const createdReview = {
      userId,
      review,
      rating
    };
    
    e.preventDefault();
    dispatch(createReviewThunk(createdReview));
    history.push("/tests");
  };

  const handleCancelClick = (e) => {
    e.preventDefault();
    history.push("/tests");
  };


    return (
      <form className='review-form' onSubmit={handleSubmit}>
        <h1>Post a Review</h1>
        <input type="text" placeholder="Review" value={review} onChange={updateReview} required/>
        <input type="number" placeholder="Rating" value={rating} onChange={updateRating}required/>
        <button type="submit">Submit Review</button>
        <button type="button" onClick={handleCancelClick}>Cancel</button>
      </form>
  );
}
  export default ReviewFormPage;
