import { getTestsThunk } from "../../store/tests";
import { useDispatch, useSelector} from "react-redux";
import { useHistory } from "react-router-dom";
import { useEffect } from "react";
import { clearReview } from "../../store/reviews";

function TestsPage() {
  const dispatch = useDispatch();
  const history = useHistory();

  const sessionUser = useSelector((state) => state.session.user);
  const testsObject = useSelector((state) => state.tests);
  const testsArray = Object.values(testsObject);

  useEffect(() => {
    dispatch(getTestsThunk());
  }, [dispatch]);




  if (sessionUser) {
    return (
      <>
        {testsObject &&
          testsArray.map((test) => {

            const handleClick = (e) => {
              e.preventDefault();
              history.push(`/test/${test.id}`);
            };

            const handleClickReviews = (e) => {
              e.preventDefault();
              dispatch(clearReview());
              const testId = Number(e.target.id);
              history.push(`/reviews/test/${testId}`);
            };

            const handleClickCreateReviews = (e) => {
              e.preventDefault();
              const testId = Number(e.target.id);
              history.push(`/reviews/create/${testId}`);
            };

            return (

              <ul key={test.id}>
                <div>
                <img className="photo" src={test.url} alt={"Science"} width="300" height="300"/>
                </div>
                <li>{test.name}</li>
                <li>{test.details}</li>
                <button type="button" onClick={handleClick}>Edit</button>
                <button type="button" id={test.id} onClick={handleClickReviews}>Show Reviews</button>
                <button type="button" id={test.id} onClick={handleClickCreateReviews}>Post Reviews</button>
              </ul>

            );
          })}
      </>
    );

  } else {

    return (
      <>
        {testsObject &&
          testsArray.map((test) => {
            const handleClick = (e) => {
              e.preventDefault();
              history.push(`/login`);
            };

            const handleClickCreateReviews = (e) => {
              e.preventDefault();
              history.push(`/login`);
            };

            return (
              <ul key={test.id}>
                  <div>
                <img className="photo" src={test.url} alt={"Science"} width="300" height="300"/>
                </div>
                <li>{test.name}</li>
                <li>{test.details}</li>
                <button type="button" onClick={handleClick}>Login to Edit</button>
                <button type="button" id={test.id} onClick={handleClickCreateReviews}>Log in to see Reviews</button>
                <button type="button" onClick={handleClickCreateReviews}>Login to Post Reviews</button>
              </ul>
            );
          })}
      </>
    );
  }
}
export default TestsPage;
