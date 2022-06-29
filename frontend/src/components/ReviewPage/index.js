import { deleteReviewId, getAllReviews } from "../../store/reviews";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { useHistory } from 'react-router-dom';

function ReviewPage() {
const dispatch = useDispatch();
const history = useHistory();


const reviewsObject = useSelector((state) => state.reviews);
const reviewsArray = Object.values(reviewsObject);

    useEffect(() => {
        dispatch(getAllReviews());
      }, [dispatch]);

  const handleClickDelete = (e) => {
    e.preventDefault();
    const buttonData = Number(e.target.id);
    console.log(buttonData)
    for (const review of reviewsArray) {
      if(review.id === buttonData) {
        dispatch(deleteReviewId(review, buttonData))
        history.push("/reviews");
      }
    }
  };

return (
    <>
      {reviewsObject && reviewsArray.map((review) => {
          return (
            <ul key={review.id}>
              <li>{review.userId}</li>
              <li>{review.review}</li>
              <button type="button" id={review.id} onClick={handleClickDelete}>Delete</button>
            </ul>
          );
        })}
    </>
  );
}

export default ReviewPage;
