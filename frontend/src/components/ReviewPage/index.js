import { deleteReviewId, getAllReviews } from "../../store/reviews";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { useHistory, useParams} from 'react-router-dom';

function ReviewPage() {
const dispatch = useDispatch();
const history = useHistory();

const id = 5;
const reviewsObject = useSelector((state) => state.reviews);
const reviewsArray = Object.values(reviewsObject);

const singleReview = reviewsArray[id]

    useEffect(() => {
        dispatch(getAllReviews());
      }, [dispatch]);

  const handleClickDelete = (e) => {
    e.preventDefault();
    dispatch(deleteReviewId(singleReview, id))
    history.push("/tests");
  };

return (
    <>
      {reviewsObject && reviewsArray.map((review) => {
          return (
            <ul key={review.id}>
              <li>{review.userId}</li>
              <li>{review.review}</li>
              <button type="button" onClick={handleClickDelete}>Delete</button>
            </ul>
          );
        })}
    </>
  );
}

export default ReviewPage;
