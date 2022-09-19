import { deleteReviewId, getAllReviews } from "../../store/reviews";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { useHistory } from 'react-router-dom';
import './reviewPage.css';

function ReviewPage() {
const dispatch = useDispatch();
const history = useHistory();

const user = useSelector(state => state.session.user)
const reviewsObject = useSelector((state) => state.reviews);
const reviewsArray = Object.values(reviewsObject);
const urlArray = window.location.href.split('/');
const num = Number(urlArray[urlArray.length - 1]);

    useEffect(() => {
        dispatch(getAllReviews(num))
      }, [dispatch, num]);

      const handleClickDelete = (e) => {
        e.preventDefault();
        const buttonData = Number(e.target.id);
        for (const review of reviewsArray) {
          if(review.id === buttonData) {
            dispatch(deleteReviewId(review, buttonData))
            history.push(`/reviews/test/${review.testId}`);
          }
        }
      };

      const handleClick = (e) => {
        e.preventDefault();
        history.push("/tests");
      };


    return (
      <>
      {!reviewsArray.length ?
      <>
      <h1>No Reviews</h1>
      <button type="button"  onClick={handleClick}>Return to Test</button>
      </>
      :
        reviewsArray.map((review) => {
          if(user.id === review.userId) {
            return (
              <div className="reviewPage">
              <h1>REVIEW: </h1>
              <span key={review.id}>
                <p>{review.userId}</p>
                <p>{review.review}</p>
                <div className="buttons">
                <button type="button" id={review.id} onClick={handleClickDelete}>Delete</button>
                <button type="button"  onClick={handleClick}>Return to Test</button>
                </div>
              </span>
              </div>
            );
          } else {
            return (
              <div className="reviewPage">
              <h1>REVIEW: </h1>
              <span key={review.id}>
                <p><label>Review:</label> {review.review}</p>
                <p><label>Rating:</label> {review.rating}</p>
                <div className="buttons">
                <button type="button"  onClick={handleClick}>Return to Test</button>
                </div>
              </span>
              </div>
            );
          }
          })}
      </>
      );
    }

export default ReviewPage;
