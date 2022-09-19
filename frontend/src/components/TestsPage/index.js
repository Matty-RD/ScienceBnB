import { getTestsThunk } from "../../store/tests";
import { useDispatch, useSelector} from "react-redux";
import { useHistory } from "react-router-dom";
import { useEffect } from "react";
import { clearReview } from "../../store/reviews";
import './testPage.css';

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
        { testsArray.map((test) => {

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

            const enlistsPage = (e) => {
              e.preventDefault();
              const testId = Number(e.target.id);
              history.push(`/enlist/${testId}`);
            };

            return (
              <div className="postDiv">
                <img className="Photo" src={test.url} alt={"Science"} width="400" height="400"/>
                <span>
                <p><label>Title:</label> {test.name}</p>
                <p><label>Address:</label> {test.address}</p>
                <p><label>Details:</label> {test.details}</p>
                <p><label>Pay:</label> ${test.pay}</p>
                </span>
                <div className="buttons">
                <button type="button" onClick={handleClick}>Edit</button>
                <button type="button" id={test.id} onClick={handleClickReviews}>Show Reviews</button>
                <button type="button" id={test.id} onClick={handleClickCreateReviews}>Post Reviews</button>
                <button type="button" id={test.id} onClick={enlistsPage}>Enlist</button>
                </div>
              </div>

            );
          })}
      </>
    );

  } else {

    return (
      <>
        {testsArray.map((test) => {
            const handleClick = (e) => {
              e.preventDefault();
              history.push(`/login`);
            };

            const handleClickCreateReviews = (e) => {
              e.preventDefault();
              history.push(`/login`);
            };

            return (
              <div className="postDiv">
                <img className="Photo" src={test.url} alt={"Science"} width="400" height="400"/>
                <span>
                <p><label>Title:</label> {test.name}</p>
                <p><label>Address:</label> {test.address}</p>
                <p><label>Details:</label> {test.details}</p>
                <p><label>Pay:</label> ${test.pay}</p>
                </span>
                <div className="buttons">
                <button type="button" onClick={handleClick}>Login to Edit</button>
                <button type="button" id={test.id} onClick={handleClickCreateReviews}>Log in to see Reviews</button>
                <button type="button" onClick={handleClickCreateReviews}>Login to Post Reviews</button>
                </div>
              </div>
            );
          })}
      </>
    );
  }
}
export default TestsPage;
