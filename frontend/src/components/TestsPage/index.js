import { getTestsThunk } from "../../store/tests";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { useEffect } from "react";

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
              history.push(`/reviews`);
            };

            const handleClickCreateReviews = (e) => {
              e.preventDefault();
              history.push(`/reviews/create`);
            };
            return (
              <ul key={test.id}>
                <img className="photo" src={test.url} alt={"Science"} width="300" height="300"/>
                <li>{test.name}</li>
                <li>{test.details}</li>
                <button type="button" onClick={handleClick}>Edit</button>
                <button type="button" onClick={handleClickReviews}>Show Reviews</button>
                <button type="button" onClick={handleClickCreateReviews}>Post Reviews</button>
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

            const handleClickReviews = (e) => {
              e.preventDefault();
              history.push(`/reviews`);
            };

            const handleClickCreateReviews = (e) => {
              e.preventDefault();
              history.push(`/create`);
            };

            return (
              <ul key={test.id}>
                <img className="photo" src={test.url} alt={"Science"} width="300" height="300"/>
                <li>{test.name}</li>
                <li>{test.details}</li>
                <button type="button" onClick={handleClick}>Login to Edit.</button>
                <button type="button" onClick={handleClickReviews}>Show Reviews</button>
                <button type="button" onClick={handleClickCreateReviews}>Post Reviews</button>
              </ul>
            );
          })}
      </>
    );
  }
}
export default TestsPage;
